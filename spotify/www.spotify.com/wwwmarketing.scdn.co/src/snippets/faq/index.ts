export default function (payload) {
    const structuredDataOutput = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: payload.map(entry => {
            return {
                "@type": "Question",
                name: entry.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: entry.answer
                }
            };
        })
    };
    return structuredDataOutput;
}
//# sourceMappingURL=index.js.map