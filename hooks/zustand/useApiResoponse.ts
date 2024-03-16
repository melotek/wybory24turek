import { AxiosResponse } from "axios";
import create, { SetState, StoreApi } from "zustand";
export type State = {
  response: AxiosResponse<any, any> | null;
};

export type Actions = {
  setResponse: (response: State["response"]) => void;
};

const useApiResponse = create<State & Actions>(
  (set: StoreApi<any>["setState"]) => ({
    response: null,
    setResponse: (respnse) =>
      set((state: State) => ({ ...state, response: respnse })),
  }),
);
export default useApiResponse;
