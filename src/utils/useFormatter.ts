export const useFormatter = () => ({
  formatDateTime: (dateTime: string) => {
    try {
      if (!dateTime) {
        throw new Error(`Data Inexistente `);
      }

      const startDate = new Date(dateTime)
        .toLocaleDateString("pt-Br", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .split("/")
        .reverse()
        .join("-");

      const startHour = new Date(dateTime).toLocaleTimeString("pt-Br", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return startDate.concat(" ", startHour);
    } catch (error) {
      return null;
    }
  },
});
