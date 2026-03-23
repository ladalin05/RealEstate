import PropertyCard from '../../Card/PropertyCard';
import { SectionHeader } from '../SectionHeader';
import CityImage from '../../../assets/images/city-listing.jpg'
import { Image } from '../../GeneralComponent';
// --- Reusable Property List Section ---
export const BlogSection = () => {

  const blogData = [
                        {
                            id: 1,
                            category: "Living Room",
                            title: "Private Contemporary Home Balancing Openness",
                            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                            date: { month: "July", day: "28" },
                            excerpt: "Exploring the harmony between minimalism and functional family living."
                        },
                        {
                            id: 2,
                            category: "Architecture",
                            title: "The Rise of Sustainable Urban Lofts in 2026",
                            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                            date: { month: "Aug", day: "12" },
                            excerpt: "How green spaces are being integrated into high-density city living."
                        },
                        {
                            id: 3,
                            category: "Interior Design",
                            title: "Modern Scandinavian Styles for Small Spaces",
                            image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
                            date: { month: "Sept", day: "05" },
                            excerpt: "Maximize your square footage without sacrificing premium aesthetics."
                        }
                    ]

  return (
    <div className={`vfx-trending-places py-5`}>
      <div className="container">
        {/* Section Header */}
        <div className="row mb-4">
            <div className="vid-item-section text-black mb-3 text-center align-items-center" data-aos="fade-up" data-aos-delay="200" data-aos-offset="1000">
              <h4 className="fw-bold">From Our Blog</h4>
              <p>Aliquam lacinia diam quis lacus euismod</p>
            </div>
        </div>

        {/* Property Cards */}
        <div className="container d-flex justify-content-around mt-5" data-aos="fade-up" data-aos-delay="200" data-aos-offset="1000">
            {blogData.map((blog) => (
                <div className="custom-card border-0">
                    {/* Image Section */}
                    <div className="position-relative">
                    <img 
                        src={blog.image}
                        className="img-fluid main-image" 
                        alt={blog.category}
                    />
                    {/* Date Badge */}
                    <div className="date-badge shadow-sm">
                        <span className="month">{blog.date.month}</span>
                        <span className="day">{blog.date.day}</span>
                    </div>
                    </div>

                    {/* Content Section */}
                    <div className="card-body px-0 pt-4">
                    <p className="category text-muted mb-2">{blog.category}</p>
                    <h5 className="card-title fw-bold text-dark">
                        {blog.title}
                    </h5>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
