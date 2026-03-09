import React from 'react'

const SectionHeader = ({ icon, title, variant = "indigo" }) => {
    const colorVariants = {
        indigo: "from-indigo-100 to-indigo-50 text-indigo-700",
        green: "from-green-100 to-green-50 text-green-700",
        yellow: "from-yellow-100 to-yellow-50 text-yellow-700",
        red: "from-red-100 to-red-50 text-red-700",
        purple: "from-purple-100 to-purple-50 text-purple-700",
        Impbox: "Impbox",
        SubBox: "SubBox",
        DetailBox: "DetailBox"
    };

    return (
        <div
            className={` mb-4 px-4 py-2 rounded-lg bg-linear-to-r ${colorVariants[variant]
                } font-semibold text-lg flex items-center gap-2`}
        >
            <span>{icon}</span>
            <span>{title}</span>
        </div>
    );
}

export default SectionHeader