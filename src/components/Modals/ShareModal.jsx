import React from 'react';

// Note: In a real app, you'd use a modal library like react-bootstrap or a custom component.
// This mock uses Bootstrap classes and simple props for visibility.

const ShareModal = ({ propertyTitle, propertyUrl }) => {
    const fullUrl = `${window.location.origin}${propertyUrl}`; // Get the full URL

    return (
        <div className="modal fade" id="vfx-social-media-popup" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-dark" id="shareModalLabel">Social Media Share</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg rounded-circle" style={{ width: '50px', height: '50px', lineHeight: '35px' }} title="facebook">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(propertyTitle)}&url=${encodeURIComponent(fullUrl)}`} target="_blank" rel="noopener noreferrer" className="btn btn-info btn-lg rounded-circle text-white" style={{ width: '50px', height: '50px', lineHeight: '35px' }} title="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href={`https://wa.me/?text=${encodeURIComponent(propertyTitle + ' ' + fullUrl)}`} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg rounded-circle" style={{ width: '50px', height: '50px', lineHeight: '35px' }} title="whatsapp">
                                    <i className="fa fa-whatsapp"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(propertyTitle)}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg rounded-circle" style={{ backgroundColor: '#0A66C2', borderColor: '#0A66C2', width: '50px', height: '50px', lineHeight: '35px' }} title="LinkedIn">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;