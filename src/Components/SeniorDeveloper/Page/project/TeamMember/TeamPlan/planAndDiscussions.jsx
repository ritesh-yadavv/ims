import { useState } from "react";
import { Pencil, Plus, Check, X } from "lucide-react";

const PlanAndDiscussions = () => {
    const [sections, setSections] = useState([
        {
            id: 1,
            name: "Payment Feature",
            tasks: [
                { code: "001", feature: "Integrate Gateway for the payment on Frontend", status: [true, false, true] },
                { code: "002", feature: "Integrate APIs for managing the data of the user made the payment", status: [false, false, true] },
                { code: "003", feature: "Integrate the feature for notification after payment successful.", status: [false, false, false] },
                { code: "004", feature: "Feature 4", status: [false, true, false] },
                { code: "005", feature: "Feature 5", status: [false, true, false] },
                { code: "006", feature: "Integrate Gateway for the payment on Frontend", status: [true, false, true] },
                { code: "007", feature: "Integrate APIs for managing the data of the user made the payment", status: [false, false, true] },
                { code: "008", feature: "Integrate the feature for notification after payment successful.", status: [false, false, false] },
                { code: "009", feature: "Feature 4", status: [false, true, false] },
                { code: "010", feature: "Feature 5", status: [false, true, false] },
            ]
        },
        { id: 2, name: "Medicine Search", tasks: [] },
        { id: 3, name: "Auth Service", tasks: [] },
        { id: 4, name: "Medicine Search", tasks: [] },
        { id: 6, name: "Auth Service", tasks: [] },
        { id: 7, name: "Medicine Search", tasks: [] },
        { id: 8, name: "Auth Service", tasks: [] },
        { id: 9, name: "Medicine Search", tasks: [] },
        { id: 10, name: "Auth Service", tasks: [] },
    ]);

    const [activeSection, setActiveSection] = useState(0);

    return (
        <div>
            <div className="flex h-[391px] bg-[#ECECEC] ">
                {/* Sidebar */}
                <div className="w-64 h-auto flex-shrink-0 bg-[#ECECEC] overflow-y-auto mt-2 font-jakarta hide-scrollbar">
                    <div className="bg-[#F6F6F6] rounded-l-lg shadow-sm p-3 h-auto flex flex-col font-jakarta">
                        <div className="space-y-2">
                            {sections.map((section, index) => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(index)}
                                    className={`w-full text-left px-2 p-2 rounded-md text-lg font-medium ${activeSection === index
                                            ? "bg-[#E1E9FF] text-[#14509F] font-medium"
                                            : "text-gray-700 hover:bg-[#EDF2FE]"
                                        }`}
                                >
                                    {section.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Main Content */}
                <div className="flex-1 bg-[#F6F6F6]  mt-2  rounded-r-lg shadow-sm h-auto flex flex-col font-jakarta">
                    {/* Header */}
                    <div className="p-3 flex-shrink-0">
                        <div className="flex justify-between p-1 items-center border border-black/15 rounded-t-xl">
                            <h2 className="text-base font-medium pl-2 text-black">
                                {sections[activeSection].name}
                            </h2>
                            <button className="flex items-center gap-2 px-2 p-1 border border-[#14509F] bg-[#F6F6F6] text-[#14509F] rounded-md hover:bg-[#EDF2FE] text-sm font-medium">
                                <Pencil size={16} />
                                Add New Task
                            </button>
                        </div>
                    </div>

                    {/* Task Table */}
                    <div className="flex-1 overflow-y-auto p-3 -mt-3 hide-scrollbar font-jakarta">
                        <div className="h-auto overflow-y-auto border border-black/15 p-1 -mt-3">
                            <table className="w-full border-collapse">
                                <thead className="sticky top-0 bg-[#F6F6F6]">
                                    <tr className="border-b border-gray-200 text-black">
                                        <th className="text-left p-2 text-sm font-medium tracking-wider">Code</th>
                                        <th className="text-left p-2 text-sm font-medium tracking-wider">Name of Feature</th>
                                        <th className="text-center p-2 text-sm font-medium tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sections[activeSection].tasks.map((task, index) => (
                                        <tr key={index} className="border-b border-gray-200 text-sm hover:bg-gray-50 ">
                                            <td className="p-2  text-gray-700 ">{task.code}</td>
                                            <td className="p-2  text-gray-700 ">{task.feature}</td>
                                            <td className="p-2">
                                                <div className="flex justify-center gap-2  ">
                                                    {task.status.map((state, i) => (
                                                        <div
                                                            key={i}
                                                            title={`Status ${i + 1}`}
                                                            className={`w-6 h-6 rounded flex items-center justify-center ${state
                                                                ? "bg-[#C1F6BF] text-[#00631A]"
                                                                : "bg-[#FFD7AB] text-[#E57A06]"
                                                                }`}
                                                        >
                                                            {state ? <Check size={14} /> : <X size={14} />}
                                                        </div>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Add New Title Button */}
                    <div className="flex justify-start p-3 -mb-2">
                        <button className=" flex items-center gap-2 px-2 p-1 border border-[#14509F] bg-[#F6F6F6] text-[#14509F] rounded-md hover:bg-[#EDF2FE] text-sm font-medium">
                            <Plus size={16} />
                            Add New Title
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanAndDiscussions;
