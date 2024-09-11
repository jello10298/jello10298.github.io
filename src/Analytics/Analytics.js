export const trackEvent = (eventLabel, eventType = 'click', eventCategory = 'UI Interaction') => {
    gtag !== undefined && gtag('event', eventType, {
        event_category: eventCategory,
        event_label: eventLabel,
        value: 1
    });
};
