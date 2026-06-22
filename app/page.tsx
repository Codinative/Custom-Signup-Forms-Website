import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import SignupPreview from "@/components/SignupPreview";
import { LINKS } from "@/lib/site";

const FEATURES = [
  { ic: "builder", t: "Visual form builder", d: "Drag-and-drop builder with live preview. Add, reorder and group fields into rows, and style colours, fonts, borders and spacing — no code, no theme edits." },
  { ic: "fields", t: "Every field type", d: "Text, email, phone, number, textarea, select, radio, checkbox, date, URL, country/state pickers, and file uploads for documents like trade licences." },
  { ic: "userCheck", t: "Approve every request", d: "New signups land in a review queue, not straight into your customer list. Approve to create the BigCommerce account, reject, or ask for more information." },
  { ic: "mail", t: "Automated emails", d: "Branded HTML templates for submission, approval, rejection and resubmission — with your logo, colours and dynamic placeholders. Send a test before going live." },
  { ic: "group", t: "Auto customer groups", d: "Approved applicants are created in BigCommerce and assigned to the customer group you choose — instant wholesale or members-only pricing and access." },
  { ic: "palette", t: "On-brand & responsive", d: "Center or split-screen layouts with your own imagery. Forms match your store and work beautifully on desktop and mobile." },
];

const FLOW = [
  { t: "Build your form", d: "Design the signup form in the visual builder — fields, layout, branding — and save it." },
  { t: "Add the script", d: "Drop the generated script into Script Manager. It replaces the default account page with your form." },
  { t: "Shoppers apply", d: "Visitors complete your custom form — including file uploads — and their request is captured." },
  { t: "You approve", d: "Review each request and approve it. The customer account is created and the welcome email goes out." },
];

const USECASES = [
  { ic: "group", t: "B2B & wholesale", d: "Vet resellers before they get trade pricing. Collect a trade licence and company details, approve, and drop them into your wholesale group." },
  { ic: "shield", t: "Members-only stores", d: "Gate registration behind your approval so only vetted customers can create an account and shop." },
  { ic: "form", t: "Custom applications", d: "Loyalty programmes, dealer networks, event access — any flow where you need more than name and email up front." },
];

const FAQS = [
  { q: "How does it replace the default BigCommerce signup form?", a: "The app generates a lightweight script you add in Storefront → Script Manager. On the create-account page it swaps the default form for your custom one — no theme files to edit, and you can remove it any time by deleting the script." },
  { q: "Do customers get an account immediately?", a: "Only if you want them to. By default every submission becomes a request you review. When you approve it, the app creates the customer in BigCommerce and assigns your chosen customer group. You can also reject or ask for more information." },
  { q: "Can I collect file uploads, like a trade licence?", a: "Yes. The file-upload field lets applicants attach documents, which are stored securely and shown with the request so you can verify before approving." },
  { q: "Which emails can I customise?", a: "Submission confirmation, approval, rejection and resubmission requests. Each is a branded HTML template with your logo, colours, banner and CTA, and supports dynamic placeholders like the customer's name. Send yourself a test first." },
  { q: "What permissions does the app need?", a: "Customer management (to create approved accounts), customer groups (to assign them), and storefront scripts (to install the form). It does not touch your orders or payments." },
  { q: "Does it block login or hide catalog prices for pending customers?", a: "It gates account creation — not the storefront itself. A pending applicant has no BigCommerce account yet, so there is simply nothing to log into until you approve them. On approval the app creates their account with a secure password reset so they can sign in. It does not hide catalog or pricing on its own: what visitors see is governed by your BigCommerce settings — your “require login to see prices” option and your customer-group price lists. The app supports that model by making sure only approved customers get an account, and land in the customer group whose pricing you've configured." },
  { q: "Will it conflict with an ERP/connector (e.g. Acumatica) that manages customer groups?", a: "No. The app assigns a customer group only once — at the moment it creates the approved customer — and only if you pick a group on approval (it's optional). It never runs an ongoing sync or re-assigns groups afterwards, so it won't fight a connector that pushes group membership. If you want your ERP to be the single source of truth for groups, just leave the group unset on approval and let the connector handle it." },
  { q: "What does it cost?", a: "Every install starts with a 7-day free trial. After that it's a flat USD 100/month, plus a one-time USD 100 setup fee — unlimited forms and requests, no per-signup charges." },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow on-ink"><span className="dot" /> BigCommerce Signup App</span>
            <h1>Custom signup forms, <span className="hl">with approval built in</span>.</h1>
            <p className="lead">
              Replace the default BigCommerce account form with a branded form you design — then review
              and approve every request, assign customer groups, and automate the emails. Built for
              B2B, wholesale and members-only stores.
            </p>
            <div className="hero-cta">
              <a href={LINKS.marketplace} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                <Icon name="store" size={18} /> Get it on BigCommerce
              </a>
              <Link href="/docs" className="btn btn-ink btn-lg">
                <Icon name="book" size={18} /> Read the docs
              </Link>
            </div>
            <div className="trust">
              <span className="trust-item"><Icon name="check" /> No code required</span>
              <span className="trust-sep" />
              <span className="trust-item"><Icon name="check" /> Approve before they buy</span>
              <span className="trust-sep" />
              <span className="trust-item"><Icon name="check" /> 7-day free trial</span>
            </div>
          </div>
          <SignupPreview />
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section id="features" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Why merchants use it</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>A signup experience that&apos;s actually yours.</h2>
            <p className="lead">Stop settling for the default form and the open-door registration that comes with it. Capture exactly what you need, and let no one in without your say-so.</p>
          </div>
          <div className="fgrid">
            {FEATURES.map((f) => (
              <div key={f.t} className="fcard">
                <div className="fic"><Icon name={f.ic} size={22} /></div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section id="how" className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> The signup flow</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>From application to approved account.</h2>
            <p className="lead">Four steps — build it once, then review applications as they come in.</p>
          </div>
          <div className="flow">
            {FLOW.map((s, i) => (
              <div key={s.t} className="fstep">
                <div className="fstep-n">{i + 1}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="fstep-arrow"><Icon name="arrowR" size={22} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Request management ---------- */}
      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="eyebrow"><span className="dot" /> Request management</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Review every applicant in one queue.</h2>
            <p className="lead" style={{ marginTop: 14 }}>
              Each submission lands in your dashboard with the full form data and any uploaded files.
              Approve to create the account, reject, or request more information — one at a time or in bulk.
            </p>
            <ul className="checks">
              <li><span className="ck"><Icon name="check" /></span><div><b>See everything before you decide.</b><br /><span>Full submission details and documents on every request.</span></div></li>
              <li><span className="ck"><Icon name="check" /></span><div><b>Approve in bulk.</b><br /><span>Clear a backlog of trusted applicants in a couple of clicks.</span></div></li>
              <li><span className="ck"><Icon name="check" /></span><div><b>Cooldowns stop duplicates.</b><br /><span>Configurable limits prevent repeat submissions from the same applicant.</span></div></li>
            </ul>
          </div>
          <div className="req-list">
            <div className="req">
              <span className="req-av">AK</span>
              <div className="req-body"><b>Aisha Khan</b><span>Bright Retail · Wholesale</span></div>
              <span className="req-stat pending">Pending</span>
            </div>
            <div className="req">
              <span className="req-av">MR</span>
              <div className="req-body"><b>Marco Rossi</b><span>Rossi Trading · Reseller</span></div>
              <span className="req-stat approved">Approved</span>
            </div>
            <div className="req">
              <span className="req-av">LN</span>
              <div className="req-body"><b>Lena Novak</b><span>Members club application</span></div>
              <span className="req-stat approved">Approved</span>
            </div>
            <div className="req">
              <span className="req-av">JD</span>
              <div className="req-body"><b>Jonah Dane</b><span>Incomplete documents</span></div>
              <span className="req-stat rejected">Rejected</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Use cases ---------- */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Made for</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Whenever &ldquo;just sign up&rdquo; isn&apos;t enough.</h2>
            <p className="lead">If you need to vet customers or collect more than an email, this is your form.</p>
          </div>
          <div className="fgrid">
            {USECASES.map((u) => (
              <div key={u.t} className="fcard">
                <div className="fic"><Icon name={u.ic} size={22} /></div>
                <h3>{u.t}</h3>
                <p>{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section id="pricing" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Pricing</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>One simple plan.</h2>
            <p className="lead">Start with a free trial. No per-signup fees, no field limits — everything included.</p>
          </div>
          <div className="plan-wrap">
            <div className="plan">
              <div className="plan-head">
                <span className="plan-name">Pro <span className="chip">7-day free trial</span></span>
                <div className="plan-price">
                  <b>$100</b><span>/ month</span>
                </div>
                <p className="plan-sub">Plus a one-time $100 setup fee. Try every feature free for 7 days — cancel any time by uninstalling.</p>
              </div>
              <div className="plan-body">
                <ul className="checks">
                  <li><span className="ck"><Icon name="check" /></span><div><b>Unlimited forms &amp; fields</b><br /><span>Build and publish as many form versions as you need.</span></div></li>
                  <li><span className="ck"><Icon name="check" /></span><div><b>Unlimited signup requests</b><br /><span>No caps and no per-approval charges.</span></div></li>
                  <li><span className="ck"><Icon name="check" /></span><div><b>All email templates &amp; file uploads</b><br /><span>Full branding, approvals, customer groups and document collection.</span></div></li>
                </ul>
                <div className="plan-foot">
                  <a href={LINKS.marketplace} target="_blank" rel="noopener" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                    <Icon name="store" size={18} /> Start free on BigCommerce
                  </a>
                  <span className="plan-note">Billed in USD. See the BigCommerce listing for current pricing.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Docs ---------- */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Documentation</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Guides for every step.</h2>
            <p className="lead">Everything you need to install the app and run your signup flow — reviewable before you install.</p>
          </div>
          <div className="dgrid">
            <Link href="/docs/installation" className="dcard">
              <div className="fic"><Icon name="box" size={22} /></div>
              <h3>Installation guide</h3>
              <p>Requirements, permissions, and a step-by-step setup from install to a live custom form on your storefront.</p>
              <span className="more">Read the guide <Icon name="arrowR" /></span>
            </Link>
            <Link href="/docs/user-guide" className="dcard">
              <div className="fic"><Icon name="book" size={22} /></div>
              <h3>User guide</h3>
              <p>Day-to-day usage: the form builder, request approvals, email templates, customer groups and settings.</p>
              <span className="more">Read the guide <Icon name="arrowR" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> FAQ</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Questions, answered.</h2>
          </div>
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q} <span className="ic"><Icon name="plus" size={18} /></span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Ready to own your signup flow?</h2>
              <p>Install Custom Signup Forms, design your form, and start approving the right customers — live in minutes, free for 7 days.</p>
              <div className="cta-btns">
                <a href={LINKS.marketplace} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                  <Icon name="store" size={18} /> Get it on BigCommerce
                </a>
                <Link href="/docs/installation" className="btn btn-ink btn-lg">
                  <Icon name="box" size={18} /> Installation guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
