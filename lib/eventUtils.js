import { parseSiteDate } from "@/lib/dateUtils";

export function getEventByType(config, type) {
  if (!config?.events) return null;

  if (type === "soz") {
    return {
      key: "soz",
      title: "Nişanımıza bekliyoruz",
      subtitle: "Nişan Davetiyesi",
      contentTitle: "Nişan heyecanı",
      contentDescription: "Nişanımıza sayılı günler kala tarih, konum ve takvim bilgilerini buradan kolayca takip edebilirsiniz.",
      date: config.events.soz.date,
      venue: config.events.soz.venue,
      locationUrl: config.events.soz.locationUrl,
    };
  }

  if (type === "kina") {
    return {
      key: "kina",
      title: "Kınaya bekliyoruz",
      subtitle: "Kına Davetiyesi",
      contentTitle: "Kına gecemize davetlisiniz",
      contentDescription: "Kına gecesi için tarih, mekan ve yol tarifi bilgilerini aşağıda bulabilir; dilerseniz etkinliği takviminize ekleyebilirsiniz.",
      date: config.events.kina.date,
      venue: config.events.kina.venue,
      locationUrl: config.events.kina.locationUrl,
    };
  }

  if (type === "wedding") {
    return {
      key: "wedding",
      title: "Düğünümüze bekliyoruz",
      subtitle: "Düğün Davetiyesi",
      contentTitle: "Düğün günümüzde yanımızda olun",
      contentDescription: "Düğünümüzün tarih, mekan ve konum bilgileri burada. Takvime ekleyerek bu özel günü kolayca hatırlayabilirsiniz.",
      date: config.events.wedding.date,
      venue: config.events.wedding.venue,
      locationUrl: config.events.wedding.locationUrl,
    };
  }

  return null;
}

export function getDefaultEventType(config, now = new Date()) {
  const sozDate = parseSiteDate(config.events.soz.date);
  const kinaDate = parseSiteDate(config.events.kina.date);

  if (now < sozDate) return "soz";
  if (now < kinaDate) return "kina";
  return "wedding";
}

export function getContentStage(config, now = new Date()) {
  const sozDate = parseSiteDate(config.events.soz.date);

  return now < sozDate ? "engagement" : "wedding";
}

export function getHomepageEvents(config, now = new Date()) {
  if (now < parseSiteDate(config.events.soz.date)) {
    return [getEventByType(config, "soz")];
  }

  return [getEventByType(config, "kina"), getEventByType(config, "wedding")];
}

export function getHeroEvents(config, now = new Date()) {
  return getHomepageEvents(config, now).map((event) => ({
    key: event.key,
    subtitle: event.subtitle,
    date: event.date,
  }));
}
