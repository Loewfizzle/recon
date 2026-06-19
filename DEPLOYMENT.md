# Recon Technologies — Website Deployment Guide

This is the savings-calculator landing page for Recon Technologies. This guide
explains how to take this project and make it live on **recontechusa.com**.

Please read the **"Before you start"** and **"⚠️ Do not break company email"**
sections — they matter more than the rest.

---

## What this project is (and what it is NOT)

This is a **Next.js web application** (React + TypeScript). It is a real program
that has to be **built and hosted**, not a set of HTML files.

**It cannot be uploaded to Squarespace.** Squarespace does not allow custom
applications. To put this site live you will host it on **Vercel** (free, made by
the creators of Next.js) and then point the domain at it. The current Squarespace
site will be replaced as the thing that loads at recontechusa.com.

If any of this is unfamiliar, hand this project and this guide to a web developer
— the whole job takes about 20–30 minutes for someone who has done it before.

---

## Before you start — current setup & decisions

Current known setup:
- **Domain:** `recontechusa.com`, registered at **GoDaddy** (DNS is managed at GoDaddy).
- **Current website:** hosted on **Squarespace**.
- **Goal:** make THIS project the website that loads at `recontechusa.com`.

Decision to confirm before going live:
- Going live on the root domain **replaces** the current Squarespace homepage as
  what visitors see at recontechusa.com. Make sure nothing on the existing
  Squarespace site still needs to be live there first. (Squarespace itself, and
  anything inside it, is not deleted — it just stops being what loads at the
  domain once DNS is repointed. You can keep or cancel the Squarespace
  subscription afterward; the domain stays at GoDaddy either way.)

---

## ⚠️ Do not break company email

The address **recon@recontechusa.com** runs on this domain's DNS through **MX
records**. Changing DNS to point the website at Vercel must **NOT** remove or
change the MX records, or company email will stop working.

**Rule:** when editing DNS at GoDaddy, only touch the records described in
Step 3 below (the `A` record and the `www` `CNAME`). **Leave every `MX` record
and every email-related `TXT` record exactly as it is.** Before changing
anything, take a screenshot of the current GoDaddy DNS records as a backup.

---

## Step 1 — Put the project on Vercel

You have two options. **Option A (GitHub) is easier and recommended.**

### Option A — Deploy from GitHub (recommended)
The project already lives at **https://github.com/Loewfizzle/recon**.
1. Create a free account at https://vercel.com (sign in with GitHub).
2. Click **Add New → Project**.
3. Import the **`Loewfizzle/recon`** repository.
4. Leave all settings at their defaults (Vercel auto-detects Next.js).
5. Click **Deploy**. In ~1 minute you get a live test URL like
   `recon-xxxx.vercel.app` — open it and confirm the site looks right.

### Option B — Deploy from this zip file (if you can't/won't use GitHub)
Requires **Node.js** installed (https://nodejs.org, LTS version) and a terminal.
1. Unzip this project to a folder.
2. In a terminal, `cd` into that folder.
3. Run: `npm install`
4. Run: `npx vercel login` (follow the prompts to create/sign in to Vercel).
5. Run: `npx vercel --prod`
6. Accept the defaults. Vercel builds and gives you a live URL.

> Either way, the result is the same: the site is now running on Vercel at a
> temporary `.vercel.app` URL. Next you attach the real domain.

---

## Step 2 — Add the domain in Vercel

1. In your Vercel project, go to **Settings → Domains**.
2. Add **`recontechusa.com`**.
3. Add **`www.recontechusa.com`** as well (Vercel will set it to redirect to the
   root — that's fine).
4. Vercel will now show you the exact DNS records it wants. They will match
   Step 3 below. Keep this Vercel page open.

---

## Step 3 — Point the domain at Vercel (DNS at GoDaddy)

Log in to **GoDaddy → your domain → DNS / Manage DNS**. You will make exactly
**two** changes. **Do not touch MX or email records (see warning above).**

1. **Root domain (`A` record):**
   - Find the existing `A` record with **Name/Host = `@`** (this currently points
     at Squarespace).
   - Change its **Value/Points-to** to Vercel's IP address: **`76.76.21.21`**
   - (If Vercel's dashboard shows a different IP in Step 2, use the one Vercel
     shows — it is the source of truth.)

2. **`www` subdomain (`CNAME` record):**
   - Find or create a `CNAME` record with **Name/Host = `www`**.
   - Set its **Value** to: **`cname.vercel-dns.com`**

3. Remove any leftover Squarespace-specific `A`/`CNAME` records for `@` and `www`
   **only** (the four Squarespace IPs and the `verify.squarespace.com` CNAME).
   Again — **leave MX and email TXT records alone.**

Save. DNS changes can take anywhere from a few minutes to a few hours (rarely up
to 48h) to take effect worldwide.

---

## Step 4 — Verify

1. Back in Vercel (Settings → Domains), the domains will switch to **"Valid
   Configuration"** once DNS propagates.
2. Visit **https://recontechusa.com** — it should load this savings page over
   HTTPS (Vercel issues the SSL certificate automatically).
3. Test on a phone (it's designed phone-first), tap the **Call** button, and
   submit the contact form to confirm it works.
4. Send a test email **to** recon@recontechusa.com and confirm it still arrives —
   this verifies the MX records were preserved.

---

## Rollback (if something looks wrong)

DNS changes are reversible. If you need to revert to the Squarespace site, change
the GoDaddy `A` and `CNAME` records back to the Squarespace values you
screenshotted in the warning section. Allow time for propagation.

---

## Notes / future changes

- To make future edits: change the code, and if deployed via **Option A
  (GitHub)**, Vercel automatically rebuilds and redeploys on every push to the
  `main` branch. With Option B, re-run `npx vercel --prod`.
- The social-share preview image is wired to `https://recontechusa.com`
  (`app/layout.tsx`), so link previews will resolve correctly once live.
- Run locally for testing: `npm install` then `npm run dev`, open
  http://localhost:3000.
