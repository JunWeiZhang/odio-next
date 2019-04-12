import * as RequestActions from "@redux/request/actions";
import Config from "@config/config";

export const getStreamUrl = (data, options) =>
  RequestActions.ApiCall({
    baseURL: Config.radio.baseURL,
    url: `/url/${data.id}`,
    method: "POST",
    data,
    ...options
  });
