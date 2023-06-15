import React, { memo } from 'react';
import { purify } from '../../utils/helpers';
import { faq } from '@spotify-internal/structured-data-snippets';
function StructuredData(payload) {
    const mappedData = payload.data &&
        payload.data.map(i => {
            return { question: purify(i.header), answer: purify(i.content) };
        });
    if (!mappedData)
        return null;
    const structuredDataOutput = JSON.stringify(faq(mappedData));
    return (React.createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: structuredDataOutput } }));
}
export default memo(StructuredData);
//# sourceMappingURL=structuredData.js.map