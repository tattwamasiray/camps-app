import React from 'react';

const ContactDetails = ({contactDetails}) => {
    return (contactDetails ? <div>
        <ul className="list-unstyled mb-6">
            <li className="d-inline-block me-4 mb-2">
                {contactDetails?.formatted_phone_number && (<><i className="fas fa-phone-alt me-2"
                                                                 aria-hidden="true"></i>
                    <a
                        href={`tel:${contactDetails?.formatted_phone_number}`}>{contactDetails?.formatted_phone_number}</a></>)}
            </li>
            {contactDetails?.website && <a href={contactDetails?.website} target="_blank">web site</a>}
        </ul>
    </div> : <></>)
};
export default ContactDetails;