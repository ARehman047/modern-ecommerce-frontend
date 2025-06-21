import React from 'react'
import { HashLoader } from 'react-spinners'

export const Loading = () => {
    return (
        <div class="flex items-center justify-center w-full h-screen border border-gray-200 bg-gray-50 ">
            <div role="status">
                <HashLoader
                    color="#fbce35"
                    size={100}
                />
            </div>
        </div>
    )
}
