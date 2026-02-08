import React, { useState } from 'react';
// Note: In a real app, you'd use a modal library like react-bootstrap or a custom component.
// This mock uses Bootstrap classes and simple state for visibility.

const trans = (key) => {
    const translations = {
        'words.reports_property': 'Report This Property',
        'words.write_reason': 'Write your reason here...',
        'words.submit': 'Submit'
    };
    return translations[key] || key;
};

const ReportModal = ({ onSubmit, propertyId }) => (
    <div className="modal fade" id="vfx-report-popup" tabIndex="-1" aria-labelledby="reportModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-dark" id="reportModalLabel">{trans.reports_property}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        <input type="hidden" name="property_id" value={propertyId} />
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <textarea className="form-control" rows="3" name="report_text" id="report_text" placeholder={trans.write_reason} required></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary w-100">{trans.submit}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default ReportModal;