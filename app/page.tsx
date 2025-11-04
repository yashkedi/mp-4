import getData from "@/lib/getData";
import { AuthorType, BookType } from "@/types/BookTypes";

export default async function Home() {
    const data = await getData();
    const books: BookType[] = Array.isArray(data.books) ? data.books.flat() : [];
    return (
        <div className="
      w-[80vw] h-full mx-auto
      pt-[2vh] pr-[2vw] pb-[2vh] pl-[2vw]
      bg-[#00000]
      flex flex-col items-center justify-start
    ">
            <section
                className="
          gap-y-[3vh] gap-x-[2vw]
        "
            >
                {books.map((book) => (
                    <article
                        key={book.id}
                        className="
              bg-white border border-[#ccc] p-6

            "
                    >
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full border border-[#bbb]"
                        />

                        <h1 className="text-[calc(1px+1.5vw)] text-[#000000]  text-center">
                            <strong>{book.title}</strong>
                        </h1>

                        <p className="text-[calc(1px+1.5vw)] text-[#374151] text-center">
                            <strong>Author:</strong>{" "}
                            {book.authors.map((author: AuthorType) => (author.name))}
                        </p>

                        <p className="text-[calc(1px+1.5vw)] text-[#374151] text-center">
                            <strong>Rating:</strong>{" "}
                            {book.rating.average}
                        </p>
                    </article>
                ))}
            </section>
        </div>
    );
}
