import React, { useRef, useState, useEffect } from "react";
import "../ContactUs/ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function EditTestimonials() {
    const textareaRef = useRef(null);
    const charCountRef = useRef(null);
    const maxLength = 150;
    const reviewsPerPage = 3; // Limit to 4 reviews per page

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [testimonials, setTestimonials] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);


    function updateCharacterCount() {
        if (textareaRef.current && charCountRef.current) {
            var charCount = textareaRef.current.value.length;
            charCountRef.current.textContent = `${maxLength - charCount
                } characters remaining.`;
        }
    }

    useEffect(() => {
        fetch("http://127.0.0.1:5555/testimonials")
            .then((res) => res.json())
            .then(setTestimonials)
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        setError(null);// Reset error state

        if (name.trim() && message.trim()) {
            // Get the current date and time
            const date_time = new Date().toLocaleString();

            fetch("http://127.0.0.1:5555/testimonial", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, message: message, date_time: date_time })
            })
                .then((response) => {
                    return response.json();
                })
            // Add new message to the testimonials array
            setTestimonials((prevMessages) => [
                ...prevMessages,
                { name, message, date_time },
            ]);

            // Clear form fields after submission
            setName("");
            setMessage("");

            // confirm if message was submitted
            console.log("name:", name);
            console.log("message:", message);
            console.log("date_time:", date_time);
        } else {
            // show error message 
            console.log("Please fill in all fields");
        }
    }

    //Calculate the total page numbers
    const totalPages = Math.ceil(testimonials.length / reviewsPerPage);

    // Determine the reviews to display on the current page
    const startIndex = (page - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const currentReviews = testimonials
        .slice()
        .reverse()
        .slice(startIndex, endIndex);

    // Handle going to the first page
    const goToFirstPage = () => {
        setPage(1);
    };

    // Handle going to the last page
    const goToLastPage = () => {
        setPage(totalPages);
    };

    // Handle changing the page number
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle changing the number of reviews per page
    const handleChangeRowsPerPage = (event) => {
        setReviewsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };

    // Handle input change for name field
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    // Handle input

    //Handle going to the next page
    const goToNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    //Handle going to the previous page
    const goToPreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const deleteTestimonial = async (id) => {
        //Ask for the user confirmation before deleting the testimonial
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this testimonial?"
        );

        if (confirmDelete) {
            try {
                const response = await fetch(`http://127.0.0.1:5555/testimonials/${id}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id));
                    alert("Testimonial deleted successfully");
                }
                if (response.status === 404) {
                    throw new Error("Testimonial not found");
                }
            } catch (err) {
                console.log(err.message);
                alert(err.message);
            }
        } else {
            //If the user cancels the deletion, do nothing
            alert("Testimonial deletion cancelled.");
        }
    };

    return (
        <div className="animate-swipeUp w-full m-auto pt-3 max-w-none">
            <div
                className="rounded overflow-hidden shadow-none px-6 py-3"
                style={{
                    marginBottom: "10px",
                    marginTop: "20px",
                }}
            >
                <div className="row">
                    <div
                        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7"
                        style={{
                            maxWidth: "1200px",
                            marginBottom: "10px",
                            marginTop: "10px",
                        }}
                    >
                       
                        <div className="col-lg-5 col-span-1">
                            <h3 className="text-xl font-bold mb-2">
                                Current User reviews [{testimonials.length}]:
                            </h3>
                            {testimonials.length > 0 ? (
                                <div className="bg-gray-100 p-3 rounded shadow-md">
                                    {currentReviews.map((entry, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-1 rounded-lg shadow-md mb-1 border border-gray-300"
                                            style={{
                                                wordWrap: "break-word", // Ensures words are broken at boundaries
                                                overflowWrap: "break-word", // Prevents overflow and wraps long words
                                            }}
                                        >
                                            <p className="text-sm text-gray-500">
                                                <strong>Name:</strong> {entry.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                <strong>Message:</strong> {entry.message}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                <strong>Date:</strong> {entry.date_time}
                                            </p>
                                            
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                onClick={() => deleteTestimonial(entry.id)}
                                                className="cursor-pointer  hover:text-blue-500 "
                                            />
                                        </div>


                                    ))}

                                    <div>
                                        <button
                                            onClick={goToPreviousPage}
                                            disabled={page === 1}
                                            className={`px-3 py-1 text-sm bg-gray-300 rounded ${page === 1
                                                ? "opacity-50 cursor-not-allowed"
                                                : "hover:bg-gray-400"
                                                }`}
                                        >
                                            Previous
                                        </button>
                                        <span>
                                            Page {page} of {totalPages}
                                        </span>
                                        <button
                                            onClick={goToNextPage}
                                            disabled={page === totalPages}
                                            className={`px-3 py-1 text-sm bg-gray-300 rounded ${page === totalPages
                                                ? "opacity-50 cursor-not-allowed"
                                                : "hover:bg-gray-400"
                                                }`}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-gray p-4 rounded-lg shadow-md mb-1 border border-gray-300">
                                    <p>No feedback yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditTestimonials;
