import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { LINKS } from "@/lib/site";

export const metadata = {
  title: "User guide",
  description: "How to build forms, review and approve requests, customise emails and manage settings in Custom Signup Forms day to day.",
};

const TOC = [
  { id: "dashboard", t: "The dashboard" },
  { id: "builder", t: "The form builder" },
  { id: "requests", t: "Managing requests" },
  { id: "emails", t: "Email templates" },
  { id: "groups", t: "Customer groups" },
  { id: "settings", t: "Settings & cooldowns" },
];

export default function UserGuide() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> <Link href="/docs">Docs</Link> <Icon name="chevR" size={13} /> User guide</div>
          <span className="eyebrow"><span className="dot" /> Guide</span>
          <h1 style={{ marginTop: 12 }}>User guide</h1>
          <p className="lead">How to build forms, review applications and automate the emails in Custom Signup Forms day to day.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap doc-layout">
          <aside className="doc-toc">
            <div className="doc-toc-title">On this page</div>
            {TOC.map((t) => <a key={t.id} href={`#${t.id}`}>{t.t}</a>)}
            <div style={{ marginTop: 16 }}>
              <Link href="/docs/installation" className="btn btn-ghost btn-sm" style={{ width: "100%" }}>← Installation</Link>
            </div>
          </aside>

          <article className="prose">
            <section id="dashboard">
              <h2>The dashboard</h2>
              <p>The Dashboard is your overview. At a glance it shows how your signup flow is performing:</p>
              <ul>
                <li><strong>Request stats</strong> - totals for pending, approved and rejected applications.</li>
                <li><strong>Recent activity</strong> - the latest submissions so you can act on new requests quickly.</li>
                <li><strong>Quick links</strong> - jump to the Form Builder, Requests, Email templates or Settings.</li>
              </ul>
            </section>

            <section id="builder">
              <h2>The form builder</h2>
              <p>The <strong>Form Builder</strong> is a visual, drag-and-drop editor with a live preview. You can:</p>
              <ul>
                <li>Add fields of any type - text, email, phone, number, textarea, select, radio, checkbox, date, URL, country/state, and file upload.</li>
                <li>Group fields into rows, reorder them, and mark them required.</li>
                <li>Style colours, fonts, borders, padding and more, and choose a centered or split-screen layout with your own image.</li>
                <li>Save multiple <strong>form versions</strong> and publish the one you want live.</li>
              </ul>
              <p>When you save, the app updates the storefront script so your latest form goes live. Use <strong>Live Preview</strong> to see changes instantly before you publish.</p>
            </section>

            <section id="requests">
              <h2>Managing requests</h2>
              <p>Every storefront submission becomes a <strong>request</strong> in the Requests page rather than an instant account. For each one you can:</p>
              <ul>
                <li><strong>Approve</strong> - creates the customer in BigCommerce, assigns your chosen group, and sends the approval email.</li>
                <li><strong>Reject</strong> - declines the application and (optionally) emails the applicant.</li>
                <li><strong>Request info</strong> - asks the applicant to resubmit with additional details.</li>
              </ul>
              <p>Open any request to see the full submission and any uploaded documents. Use search and the status filters to find requests fast, and <strong>bulk actions</strong> to approve or reject several at once.</p>
            </section>

            <section id="emails">
              <h2>Email templates</h2>
              <p>On the <strong>Email</strong> page you configure a branded HTML template for each moment in the flow - submission confirmation, approval, rejection and resubmission requests. For each template you can:</p>
              <ul>
                <li>Set the subject and design the body in the visual HTML editor.</li>
                <li>Customise the logo, colours, banner, CTA, footer notes and social links.</li>
                <li>Insert <strong>placeholders</strong> such as the customer&apos;s name for personalised content.</li>
                <li>Send a <strong>test email</strong> to yourself before going live.</li>
              </ul>
              <div className="note">Email delivery uses your configured SMTP service (e.g. Brevo). Set this up so confirmation and approval emails reach applicants reliably.</div>
            </section>

            <section id="groups">
              <h2>Customer groups</h2>
              <p>Choose a default <strong>customer group</strong> in Settings to have approved applicants automatically assigned to it - for example a <strong>Wholesale</strong> group with its own pricing and visibility. The list is read from your BigCommerce store, so create the group there first if it doesn&apos;t exist yet.</p>
            </section>

            <section id="settings">
              <h2>Settings &amp; cooldowns</h2>
              <p>Settings is where you manage the rest of the flow:</p>
              <ul>
                <li><strong>Notifications</strong> - get an email when a new request arrives so nothing waits unseen.</li>
                <li><strong>Cooldowns</strong> - set a time limit between submissions to prevent duplicates, and reset it for an applicant when needed.</li>
                <li><strong>Default customer group</strong> - the group approved customers are added to.</li>
              </ul>
              <div className="note" style={{ marginTop: 16 }}>
                New here? Start with the <Link href="/docs/installation">Installation guide</Link>. For anything else, email <a href={LINKS.support}>{LINKS.email}</a>.
              </div>
            </section>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
