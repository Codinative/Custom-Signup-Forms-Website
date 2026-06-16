import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { LINKS } from "@/lib/site";

export const metadata = {
  title: "Installation guide",
  description: "Requirements, permissions and a step-by-step setup to install Custom Signup Forms and publish a custom signup form on your BigCommerce storefront.",
};

const TOC = [
  { id: "requirements", t: "Before you install" },
  { id: "permissions", t: "Permissions" },
  { id: "steps", t: "Installation steps" },
  { id: "script", t: "Installing the script" },
  { id: "troubleshooting", t: "Troubleshooting" },
];

const REQUIREMENTS = [
  { t: "A BigCommerce store", d: "Any plan. Install from the App Marketplace or your control panel under Apps → My Apps." },
  { t: "Access to Script Manager", d: "You'll add one storefront script to swap the default account page for your custom form. It lives under Storefront → Script Manager." },
  { t: "Customer groups (optional)", d: "If you want approved applicants assigned to a group — e.g. Wholesale — create the group in BigCommerce first so you can select it." },
];

const STEPS = [
  { t: "Install the app", d: "Add Custom Signup Forms from the BigCommerce App Marketplace, or from Apps → My Apps. Your 7-day free trial starts on install." },
  { t: "Grant the requested permissions", d: "BigCommerce shows the permissions the app needs and asks you to confirm. Approve them to finish — you're returned to the app dashboard." },
  { t: "Build your form", d: "Open the Form Builder, add and arrange your fields, set the layout and branding, and use Live Preview to check it. Save when you're happy." },
  { t: "Generate & install the script", d: "The app generates a storefront script. Add it in Storefront → Script Manager (see below) so the form appears on your create-account page." },
  { t: "Set up emails & approvals", d: "Customise your email templates, choose the customer group for approved accounts, and configure notifications and cooldowns in Settings." },
  { t: "Verify on the storefront", d: "Visit your store's create-account page. You should see your custom form. Submit a test application and confirm it appears in the Requests dashboard." },
];

export default function InstallationGuide() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> <Link href="/docs">Docs</Link> <Icon name="chevR" size={13} /> Installation guide</div>
          <span className="eyebrow"><span className="dot" /> Guide</span>
          <h1 style={{ marginTop: 12 }}>Installation guide</h1>
          <p className="lead">Everything you need to install Custom Signup Forms and publish a branded signup form on your BigCommerce storefront.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap doc-layout">
          <aside className="doc-toc">
            <div className="doc-toc-title">On this page</div>
            {TOC.map((t) => <a key={t.id} href={`#${t.id}`}>{t.t}</a>)}
            <div style={{ marginTop: 16 }}>
              <Link href="/docs/user-guide" className="btn btn-ghost btn-sm" style={{ width: "100%" }}>User guide →</Link>
            </div>
          </aside>

          <article className="prose">
            <div className="scope-banner">
              <Icon name="info" size={18} />
              <span>Custom Signup Forms replaces your store&apos;s <b>default account registration</b> with a form you design, and holds new signups for <b>your approval</b> before creating the customer.</span>
            </div>

            <section id="requirements">
              <h2>Before you install</h2>
              <p>Make sure your store is ready. You&apos;ll need:</p>
              <div className="dsteps" style={{ marginTop: 16 }}>
                {REQUIREMENTS.map((r) => (
                  <div key={r.t} className="dstep">
                    <span className="dstep-n check"><Icon name="check" size={15} /></span>
                    <div className="dstep-b"><b>{r.t}</b><p>{r.d}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section id="permissions">
              <h2>Permissions</h2>
              <p>On install the app requests only the scopes it needs to run the signup flow — nothing about your orders or payments:</p>
              <ul>
                <li><strong>Customers — modify</strong> — to create approved applicants as real BigCommerce customer accounts.</li>
                <li><strong>Customer groups — read</strong> — to list your groups so you can assign approved customers to one.</li>
                <li><strong>Content / Checkout scripts — modify</strong> — to install the storefront script that renders your form.</li>
              </ul>
              <div className="note">The app never reads or writes orders or payment data.</div>
            </section>

            <section id="steps">
              <h2>Installation steps</h2>
              <p>Six steps from install to a live form.</p>
              <div className="dsteps" style={{ marginTop: 18 }}>
                {STEPS.map((s, i) => (
                  <div key={s.t} className="dstep">
                    <span className="dstep-n">{i + 1}</span>
                    <div className="dstep-b"><b>{s.t}</b><p>{s.d}</p></div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                <a href={LINKS.app} target="_blank" rel="noopener" className="btn btn-primary btn-sm"><Icon name="store" size={16} /> Open the app</a>
                <Link href="/docs/user-guide" className="btn btn-ghost btn-sm"><Icon name="book" size={16} /> Read the User guide</Link>
              </div>
            </section>

            <section id="script">
              <h2>Installing the script</h2>
              <p>Custom Signup Forms renders on the storefront through a single script you add in BigCommerce:</p>
              <ul>
                <li>Go to <strong>Storefront → Script Manager</strong> and click <strong>Create a Script</strong>.</li>
                <li>Set <strong>Location</strong> to <strong>Footer</strong> and <strong>Pages</strong> to the <strong>Login</strong> / create-account page (or all pages).</li>
                <li>Paste the script the app generated, then save.</li>
              </ul>
              <p>On the create-account page the script replaces the default form with your custom one, handles validation and file uploads, and shows your thank-you message after submission. To remove it later, simply delete the script.</p>
            </section>

            <section id="troubleshooting">
              <h2>Troubleshooting</h2>
              <h3>The default form still shows</h3>
              <p>The script isn&apos;t loading on that page. Re-check that the script is enabled in <strong>Script Manager</strong>, that it targets the create-account / Login page, and that you saved the latest version generated by the app.</p>
              <h3>Submissions aren&apos;t appearing in Requests</h3>
              <p>Make sure you installed the most recent generated script after your last save, and that your form is published. Then submit a fresh test application.</p>
              <h3>Approved customers aren&apos;t in the right group</h3>
              <p>Open <strong>Settings</strong> and confirm the default customer group is set. Groups must exist in BigCommerce before they appear in the list.</p>
              <div className="note" style={{ marginTop: 16 }}>
                Still stuck? Email <a href={LINKS.support}>{LINKS.email}</a> — we reply within one business day.
              </div>
            </section>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
