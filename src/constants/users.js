export const ADMIN_CONFIG = Object.freeze({
    type: "admin",
    password: "113",
    action: {
        moderate: true,
        create: true
    },
    auth: false
});

export const USER_CONFIG = Object.freeze({
    type: "user",
    password: "112",
    action: {
        moderate: false,
        create: true
    },
    auth: false
});

export const GUEST_CONFIG = Object.freeze({
    type: "guest",
    action: {
        moderate: false,
        create: false
    }
});