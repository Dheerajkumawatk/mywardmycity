-- ============================================================================
-- MyCityMyWard — leads capture + admin panel
--
-- HOW TO USE:  Supabase dashboard → SQL Editor → New query →
--              paste this WHOLE file → Run.
--
-- It is safe to run more than once. It creates:
--   • the public.leads table + row-level security
--   • the admin auth user   admin@gmail.com / Admin123   (email pre-confirmed)
--
-- After running, log in at  /admin/login  with those credentials.
-- ============================================================================

create extension if not exists pgcrypto;

-- ----------------------------------------------------------------------------
-- 1. Table
-- ----------------------------------------------------------------------------
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  type        text not null check (type in ('demo', 'contact')),
  name        text not null,
  phone       text not null,
  place       text,
  ward        text,
  interest    text,
  message     text,
  source      text,                        -- page the lead came from
  status      text not null default 'new'  -- new | contacted | done
              check (status in ('new', 'contacted', 'done'))
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_type_idx on public.leads (type);

-- ----------------------------------------------------------------------------
-- 2. Row Level Security
-- ----------------------------------------------------------------------------
alter table public.leads enable row level security;

-- Anyone (the public website, using the anon key) may submit a lead…
drop policy if exists "public can submit leads" on public.leads;
create policy "public can submit leads"
  on public.leads for insert
  to anon, authenticated
  with check (type in ('demo', 'contact'));

-- …but only the admin account may read them.
drop policy if exists "admin can read leads" on public.leads;
create policy "admin can read leads"
  on public.leads for select
  to authenticated
  using ((auth.jwt() ->> 'email') = 'admin@gmail.com');

-- …and only the admin may update a lead's status.
drop policy if exists "admin can update leads" on public.leads;
create policy "admin can update leads"
  on public.leads for update
  to authenticated
  using ((auth.jwt() ->> 'email') = 'admin@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'admin@gmail.com');

-- ----------------------------------------------------------------------------
-- 3. Admin user  —  admin@gmail.com / Admin123
--    Removes any earlier copy, then creates a fresh, email-confirmed user.
-- ----------------------------------------------------------------------------
do $$
declare
  v_email text := 'admin@gmail.com';
  v_pass  text := 'Admin123';
  v_uid   uuid := gen_random_uuid();
begin
  delete from auth.users where email = v_email;

  insert into auth.users (
    instance_id, id, aud, role, email, encrypted_password,
    email_confirmed_at, last_sign_in_at,
    raw_app_meta_data, raw_user_meta_data,
    created_at, updated_at,
    confirmation_token, recovery_token, email_change, email_change_token_new
  ) values (
    '00000000-0000-0000-0000-000000000000', v_uid, 'authenticated', 'authenticated',
    v_email, crypt(v_pass, gen_salt('bf')),
    now(), now(),
    '{"provider":"email","providers":["email"]}'::jsonb, '{}'::jsonb,
    now(), now(),
    '', '', '', ''
  );

  insert into auth.identities (
    id, user_id, provider_id, identity_data, provider,
    last_sign_in_at, created_at, updated_at
  ) values (
    gen_random_uuid(), v_uid, v_uid::text,
    jsonb_build_object(
      'sub', v_uid::text,
      'email', v_email,
      'email_verified', true,
      'phone_verified', false
    ),
    'email', now(), now(), now()
  );
end $$;

-- ----------------------------------------------------------------------------
-- 4. Quick check (optional) — should return one row
-- ----------------------------------------------------------------------------
select id, email, email_confirmed_at
from auth.users
where email = 'admin@gmail.com';
