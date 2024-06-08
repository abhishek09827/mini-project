import React from 'react';
import Cookies from 'js-cookie';

import { Mail } from "./components/mail";
import { accounts, mails } from "./data";

export default function MailPage() {


  return (
    <>
      <div className="hidden flex-col md:flex">
        {/* Content for small screens can be added here */}
      </div>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
