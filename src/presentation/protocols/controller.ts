import { HttRequest, HttpResponse } from './htt'

export interface Controller {
  handle: (httpRequest: HttRequest) => Promise<HttpResponse>
}
