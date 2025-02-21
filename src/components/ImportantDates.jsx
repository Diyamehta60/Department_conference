import React from "react";
import { FaStar, FaRegClock, FaRegCalendarAlt } from "react-icons/fa"; // Importing React Icons

const impDateData = [
  {
    title: "Full Paper Submission Date",
    date: "March 25th, 2025",
    subtitle: "Submission Deadline",
    isImportant: false,
  },
  {
    title: "Notification of Acceptance",
    date: "April 15th, 2025",
    subtitle: "Acceptance Notification",
    isImportant: true,
  },
  {
    title: "Revised Paper Submission",
    date: "April 25th, 2025",
    subtitle: "Final Paper Submission",
    isImportant: false,
  },
  {
    title: "Early Bird Registration",
    date: "April 25th, 2025",
    subtitle: "Early Registration Deadline",
    isImportant: false,
  },
  {
    title: "Late Registration",
    date: "April 30th, 2025",
    subtitle: "Late Registration Deadline",
    isImportant: false,
  },
  {
    title: "Conference Dates",
    date: "May 4-5, 2025",
    subtitle: "Event Dates",
    isImportant: true,
  },
];

// Reusable component for each important date entry
const ImportantDateEntry = ({ item }) => (
  <div className={`flex items-start space-x-4 mx-4 ${item.isImportant ? "bg-orange-100 p-3 rounded-md" : "p-2 rounded-md"}`}>
    <div className="flex flex-col">
      {/* <div className="flex items-center">
        <FaRegCalendarAlt className="text-[#034EA2] text-xl mr-2" />
        <p className={`font-medium text-lg ${item.isImportant ? "text-[#034EA2]" : "text-gray-800"}`}>{item.title}</p>
      </div> */}
      <p className={`text-sm font-light ${item.isImportant ? "text-red-600" : "text-gray-600"}`}>{item.subtitle}</p>
      <div className="flex items-center mt-1">
        {/* <FaRegClock className="text-gray-500 mr-1" /> */}
        <p className={`text-sm text-gray-700 ${item.isImportant ? "text-red-600" : ""}`}>{item.date}</p>
      </div>
    </div>
    {item.isImportant && (
      <div className="flex items-center justify-center space-x-2 ml-2">
        <div className="mt-1 rounded-full bg-[#1a1212] bg-opacity-20 font-semibold">
          <p className="px-2 py-0.5 text-xs text-red-600">Important</p>
        </div>
      </div>
    )}
  </div>
);

export default function ImportantDates() {
  return (
    <div className="mx-auto w-full p-4">
      <div className="lg:min-w-lg mt-5 w-full rounded-t-md border-l-4 border-red-600 bg-gray-200 p-4 lg:max-w-full">
        <p className="text-lg font-semibold">Important Dates</p>
      </div>
      <div className="flex overflow-x-auto items-center rounded-b-md bg-gray-100 p-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md lg:max-h-80 lg:max-w-full">
        {impDateData.length > 0 ? (
          impDateData.map((item, index) => (
            <ImportantDateEntry key={index} item={item} />
          ))
        ) : (
          <h3>No Dates Announced Yet</h3>
        )}
      </div>
    </div>
  );
}
