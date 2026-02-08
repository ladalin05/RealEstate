import '../../assets/styles/global.css';


// --- Section Header Component ---
export const SectionHeader = ({ title, viewAllLink, viewAllTitle = "View All" }) => (
  <div className="section-title vid-item-section mb-3 d-flex justify-content-between align-items-center">
    <h2>{title}</h2>
    <span className="view-more">
      <a href={viewAllLink} title={viewAllTitle} className="text-decoration-none d-flex align-items-center fw-bold">
        {viewAllTitle}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512" style={{ verticalAlign: 'text-top' }}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="60" d="m184 112l144 144l-144 144"></path></svg>
      </a>
    </span>
  </div>
);

