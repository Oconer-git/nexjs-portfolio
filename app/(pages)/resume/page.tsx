const page = () => {
    return (
        <object
            data="/latest.pdf"
            type="application/pdf"
            className="h-screen w-screen"
        >
            <p>
                Your browser does not support embedded PDFs.{' '}
                <a href="/latest.pdf">Download the PDF</a>.
            </p>
        </object>
    );
};

export default page;
