# Supabase setup — leads + admin panel

The code is done. **One step** on the Supabase side for
`https://onpldonrikwkbkjvrdly.supabase.co`.

## Run the SQL

Supabase dashboard → **SQL Editor** → **New query** → paste the whole of
[`supabase/schema.sql`](supabase/schema.sql) → **Run**.

That single script creates everything:

- `public.leads` table + row-level security
  - anyone (public website) can **insert** a lead
  - only `admin@gmail.com` can **read / update** leads
- the admin login user, email already confirmed:

  | | |
  | --- | --- |
  | Email | `admin@gmail.com` |
  | Password | `Admin123` |

The script ends with a `select` that should return one row — that confirms the
admin user exists.

It is safe to re-run (it drops and recreates the admin user each time, so it
also doubles as a "reset the admin password" script).

## Then

- `/admin/login` → sign in with the credentials above
- `/admin/leads` — **वेबसाइट लीड्स** (every plan's demo request)
- `/admin/queries` — **संपर्क क्वेरी** (contact-form messages)
- `/demo` and `/contact` forms write rows into `leads`

Optional — block strangers from signing up:
**Authentication → Providers → Email → “Allow new users to sign up” = OFF**.

## Environment

Already in `.env.local` / `.env` (add the same two on the production host):

```
NEXT_PUBLIC_SUPABASE_URL="https://onpldonrikwkbkjvrdly.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="sb_publishable_d2vlfbxNfJUs75Gpsrt8gA_LHbflD5I"
```

The publishable/anon key is safe to expose — the RLS policies are what protect
the data.
