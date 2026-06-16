import Icon from "@/components/Icon";

/** A realistic mock of a custom signup form as a shopper sees it on the storefront. */
export default function SignupPreview() {
  return (
    <div className="cwrap">
      <div className="ccard">
        <div className="ccard-head">
          <div className="ccard-dots"><i /><i /><i /></div>
          <span className="ccard-url">store.com · create account</span>
        </div>
        <div className="ccard-body">
          <div className="ccard-step">Wholesale application</div>
          <div className="fform">
            <div className="frow">
              <label className="ffield">
                <span className="flabel">First name</span>
                <span className="finput">Sajid</span>
              </label>
              <label className="ffield">
                <span className="flabel">Last name</span>
                <span className="finput">Jameel</span>
              </label>
            </div>
            <label className="ffield">
              <span className="flabel">Business email</span>
              <span className="finput">info@codinative.com</span>
            </label>
            <label className="ffield">
              <span className="flabel">Account type</span>
              <span className="finput sel">Wholesale / Reseller <Icon name="chevR" size={14} /></span>
            </label>
            <label className="ffield">
              <span className="flabel">Trade licence</span>
              <span className="finput file"><Icon name="upload" size={15} /> licence.pdf</span>
            </label>
            <span className="fbtn">Submit application</span>
          </div>
        </div>
      </div>
      <div className="cfloat">
        <Icon name="userCheck" size={18} />
        <div>
          <b>Request approved</b>
          <span>Customer account created</span>
        </div>
      </div>
    </div>
  );
}
