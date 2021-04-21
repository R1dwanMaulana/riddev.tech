<template>
<div class="container p-5">
    <div>
        <h1 class="title">
            My Programming Stack
        </h1>

        <p class="desc mb-3 text-gray-800">
            This is my personal dashboard, this page is used to explain the programming language <br/> I often use and other project screen shots.
        </p>

        <div class="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
            <div>
                <div class="rounded-md overflow-hidden hover:shadow-lg border border-yellow-300 hover:bg-yellow-300 hover:text-white m-3">
                    <div class="px-6 py-4">
                    <div class="font-medium text-xl mb-2">Javascript</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="rounded-md overflow-hidden hover:shadow-lg border border-blue-400 hover:bg-blue-400 hover:text-white m-3">
                    <div class="px-6 py-4">
                    <div class="font-medium text-xl mb-2">Typescript</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="rounded-md overflow-hidden hover:shadow-lg border border-green-500 hover:bg-green-500 hover:text-white m-3">
                    <div class="px-6 py-4">
                    <div class="font-medium text-xl mb-2">Vuejs</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="rounded-md overflow-hidden hover:shadow-lg border border-red-400 hover:bg-red-500 hover:text-white m-3">
                    <div class="px-6 py-4">
                    <div class="font-medium text-xl mb-2">Laravel</div>
                    </div>
                </div>
            </div>
        </div>

        <h1 class="title mt-14">
            History projects
        </h1>
        <div class="max-w-sm rounded-md overflow-hidden hover:shadow-xl border border-gray-300 m-5">
            <img class="w-full" src="/hijabstore.png" alt="Hijab Store">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Hijab Store</div>
                <p class="text-gray-700 text-base">
                build a hijab shop website with a user-friendly appearance.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Vuejs</span>
                <span class="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">CSS</span>
            </div>
        </div>
        <div class="max-w-sm rounded-md overflow-hidden hover:shadow-xl border border-gray-300 m-5">
            <img class="w-full" src="/restodev.png" alt="Web App Restoran">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Restoran</div>
                <p class="text-gray-700 text-base">
                building a restaurant search website equipped with a menu of available foods.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Javascript</span>
                <span class="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Webpack</span>
            </div>
        </div>
    </div>
</div>
</template>
