import React from 'react';

const UpdateProfile = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
                {/* TITLE */}
                <h1 className="text-3xl font-bold text-center text-gray-900">
                    Edit Your Profile
                </h1>
                <p className="text-center text-gray-500 text-sm mt-2">
                    Update your information below
                </p>

                {/* FORM */}
                <form className="space-y-4 mt-6">
                    {/* Name Field */}
                    <div>
                        <label className="text-sm text-gray-600">Name</label>
                        <div className="relative mt-1">
                            <input
                                name="name"
                                placeholder="Your name"
                                className="w-full border p-2 rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <div className="relative mt-1">
                            <input
                                name="email"
                                placeholder="you@example.com"
                                className="w-full border p-2 rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Image URL Field */}
                    <div>
                        <label className="text-sm text-gray-600">Image URL</label>
                        <div className="relative mt-1">
                            <input
                                name="imageUrl"
                                placeholder="Enter image URL"
                                className="w-full border p-2 rounded-lg"
                            />
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Done
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;