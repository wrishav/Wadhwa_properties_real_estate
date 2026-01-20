'use client';

const areaCategories = [
    {
        title: 'Sector Areas',
        tags: ['Sector 7', 'Sector 8', 'Sector 9', 'Sector 10', 'Sector 11', 'Sector 14', 'Sector 15', 'Sector 16'],
    },
    {
        title: 'Old Faridabad',
        tags: ['Railway Road', 'Nehru Ground', 'Company Bagh', 'Ajronda', 'Ballabgarh', 'Sarai Khwaja', 'Chawla Colony', 'Mandi Gate'],
    },
    {
        title: 'Greater Faridabad',
        tags: ['Neharpar', 'Faridabad Extension', 'Omaxe City', 'Piyush Vihar', 'Greenfield City', 'Crown Interiorz Mall', 'Prithla', 'Tigaon'],
    },
];

export default function ServiceAreas() {
    const handleTagClick = (area) => {
        if (typeof window !== 'undefined' && window.WadhwaProperties) {
            window.WadhwaProperties.showNotification(`Searching for properties in ${area}...`, 'info');
            setTimeout(() => {
                window.open('tel:+919810623803', '_self');
            }, 1500);
        } else {
            window.open('tel:+919810623803', '_self');
        }
    };

    return (
        <section className="service-areas">
            <div className="container">
                <div className="section-header">
                    <h2>Areas We Serve</h2>
                    <p>Comprehensive coverage across Faridabad's prime locations</p>
                </div>
                <div className="areas-grid">
                    {areaCategories.map((category, index) => (
                        <div key={index} className="area-category">
                            <h3>{category.title}</h3>
                            <div className="area-tags">
                                {category.tags.map((tag, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="area-tag"
                                        onClick={() => handleTagClick(tag)}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
