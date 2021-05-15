import Service from "@/services/services.js";

export default {
  async post(url, data, config) {
    return await Service.post(url, data, config);
  }
}