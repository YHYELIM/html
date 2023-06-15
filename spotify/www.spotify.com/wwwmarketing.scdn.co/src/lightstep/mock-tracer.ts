import { MockTracer as OTMockTracer, } from 'opentracing';
import { MockContext as OTMockContext, MockSpan as OTMockSpan, } from 'opentracing/lib/mock_tracer';
class MockContext extends OTMockContext {
    constructor(span) {
        super(span);
        this._traceGUID = 'MOCK_TRACE_ID';
        this._guid = 'MOCK_SPAN_ID';
        this.toSpanId = () => this._guid;
        this.toTraceId = () => this._traceGUID;
    }
}
class MockSpanWithReferences extends OTMockSpan {
    constructor(tracer) {
        super(tracer);
        this.references = [];
        this._context = () => new MockContext(this);
    }
    addReference(ref) {
        this.references.push(ref);
    }
    traceGUID() {
        return this._context().toTraceId();
    }
    guid() {
        return this._context().toSpanId();
    }
}
export class MockTracer extends OTMockTracer {
    constructor() {
        super();
        this._allocSpan = () => new MockSpanWithReferences(this);
    }
    dumpSpans() {
        return this.report().spans.map(span => ({
            refs: span.references.map(ref => ({
                type: ref.type(),
                spanId: ref.referencedContext().toSpanId(),
                traceId: ref.referencedContext().toTraceId(),
            })),
            tags: span.tags(),
            logs: span._logs.map((log) => {
                if (log.fields.stack)
                    log.fields.stack = 'REPLACED FOR SNAPSHOT';
                return log;
            }),
            operationName: span.operationName(),
        }));
    }
    extract(format, carrier) {
        if (!carrier['X-Cloud-Trace-Context'])
            return null;
        return {
            toSpanId: () => `MOCKED_SPAN_ID ${format} ${JSON.stringify(carrier)}`,
            toTraceId: () => `MOCKED_TRACE_ID ${format} ${JSON.stringify(carrier)}`,
        };
    }
    inject(_context, _format, _carrier) {
        _carrier['X-Cloud-Trace-Context'] =
            'ffffffffffffffffffffffffffffffff/9999999;o=1';
    }
}
//# sourceMappingURL=mock-tracer.js.map