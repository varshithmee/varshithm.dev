import React from "react";

const Loader = () => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
			<div className="flex flex-col items-center">
				<div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-white" />
				<p className="mt-4 text-lg font-medium text-white">
					Arriving with style...
				</p>
			</div>
		</div>
	);
};

export default Loader;
