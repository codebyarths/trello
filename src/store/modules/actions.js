import { http } from "@/utils/http";
import * as  services from "./services"


export const ActionGetListaHistorico = () => {
    // eslint-disable-next-line no-undef
    return new Promise<any>(async (resolve, reject) => {
      try {
        const { data } = await http(services.getHistoricoLista())
        resolve(data)
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }
  