// app/about/page.tsx
export default function About() {
    return (
        <main className="w-[80vw] mx-auto py-10 text-center text-[#ffffff] bg-[#000000]">
            <h1 className="text-2xl font-semibold mb-4">About Book Finder</h1>
            <p className="text-lg text-[#ffffff]">
                Book Finder is a simple web application that lets you search and filter books
                by title, author, rating, or ISBN. The search engine uses semantic parsing,
                meaning you can search for “books about dogs” and it will automatically find
                related topics such as “border collies” without needing to specify every term.
                The app is built using Next.js and Tailwind CSS, with secure server-side API
                calls to ensure smooth and safe performance.
            </p>
        </main>
    );
}
