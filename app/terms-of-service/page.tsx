import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { APP_NAME, VENDOR, LINKS } from "@/lib/site";

export const metadata = {
  title: "Terms of Service",
  description: "The terms for using Custom Signup Forms, a BigCommerce app by Codinative.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> Terms of Service</div>
          <span className="eyebrow"><span className="dot" /> Legal</span>
          <h1 style={{ marginTop: 12 }}>Terms of Service</h1>
          <p className="lead">The terms for using {APP_NAME}. Last updated 16 June 2026.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap-narrow prose">
          <p>
            By installing or using {APP_NAME} (&ldquo;the App&rdquo;), provided by {VENDOR} (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
            you (&ldquo;the merchant&rdquo;) agree to these terms.
          </p>

          <section>
            <h2>1. The service</h2>
            <p>
              The App lets a merchant design a custom account-signup form, publish it to their BigCommerce storefront via a
              script, collect applications with optional file uploads, and approve them into BigCommerce customer accounts with
              automated email notifications.
            </p>
          </section>

          <section>
            <h2>2. Merchant responsibilities</h2>
            <ul>
              <li>Installing the storefront script correctly and verifying the form before directing customers to it.</li>
              <li>Reviewing applications and deciding whom to approve, reject, or ask for more information.</li>
              <li>Handling applicant data lawfully, including obtaining any consents required in your jurisdiction, and honouring deletion requests.</li>
              <li>Configuring email (SMTP) settings so confirmation and notification emails are delivered.</li>
            </ul>
          </section>

          <section>
            <h2>3. Billing &amp; trial</h2>
            <p>
              The App is offered on a subscription basis with a free trial period. After the trial, recurring fees and any
              one-time setup fee apply as shown at sign-up and on the BigCommerce listing. Fees are billed through our payment
              processor. You can cancel at any time by uninstalling the App; fees already charged are non-refundable except
              where required by law.
            </p>
          </section>

          <section>
            <h2>4. Acceptable use</h2>
            <p>
              You agree not to use the App to collect data unlawfully, to send unsolicited email, or in any way that violates
              BigCommerce&apos;s terms or applicable law. We may suspend access for misuse.
            </p>
          </section>

          <section>
            <h2>5. Availability &amp; changes</h2>
            <p>
              We aim for high availability but do not guarantee uninterrupted service. We may update the App and these terms;
              continued use after a change constitutes acceptance.
            </p>
          </section>

          <section>
            <h2>6. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, {VENDOR} is not liable for any indirect, incidental, or
              consequential damages arising from use of the App. Our total liability is limited to the fees paid for the App in
              the preceding three months.
            </p>
          </section>

          <section>
            <h2>7. Termination</h2>
            <p>
              You may stop using the App at any time by uninstalling it from your BigCommerce control panel, which removes the
              storefront script and deletes your stored data (see the <Link href="/privacy-policy">Privacy Policy</Link>).
            </p>
          </section>

          <section>
            <h2>8. Contact</h2>
            <p>Questions about these terms? Email <a href={LINKS.support}>{LINKS.email}</a>.</p>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
