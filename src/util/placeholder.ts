

export const parseReminderPlaceholders = (context: any, src: String) => {
    return src
        .replace("{name}", context["name"])
        .replace("{zoom-link}", context["zoom-link"])
}