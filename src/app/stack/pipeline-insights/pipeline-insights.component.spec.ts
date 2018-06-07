import { PipelineInsightsComponent } from './pipeline-insights.component';

describe ('PipelineInsightsComponent', () => {
  it('should correctly identify return status codes as acceptable or not', () => {
    [100, 200, 201, 202, 300, 400, 401, 300, 402, 405].forEach((statusCode) => {
      let expectedResult: boolean = (statusCode === 200 || statusCode === 202);
      expect(PipelineInsightsComponent.isExpectedStatusCode(statusCode)).toEqual(expectedResult);
    });
  });
});
