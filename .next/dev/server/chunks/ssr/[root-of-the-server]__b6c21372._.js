module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(app)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/src/collections/Users.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>Users
]);
const Users = {
    slug: 'users',
    admin: {
        useAsTitle: 'email'
    },
    auth: true,
    fields: []
};
}),
"[project]/src/collections/Media.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Media",
    ()=>Media
]);
const Media = {
    slug: 'media',
    upload: true,
    access: {
        read: ()=>true
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true
        }
    ]
};
}),
"[project]/src/collections/Posts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Posts",
    ()=>Posts
]);
const Posts = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title'
    },
    access: {
        read: ()=>true
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'content',
            type: 'richText'
        }
    ]
};
}),
"[project]/src/collections/Pages.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pages",
    ()=>Pages
]);
const Pages = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        defaultColumns: [
            'title',
            'slug',
            'updatedAt'
        ]
    },
    access: {
        read: ()=>true
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'content',
            type: 'richText'
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media'
        }
    ]
};
}),
"[project]/src/collections/Programs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Programs",
    ()=>Programs
]);
const Programs = {
    slug: 'programs-pages',
    labels: {
        singular: 'Program',
        plural: 'Programs'
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: [
            'title',
            'ageRange',
            'updatedAt'
        ]
    },
    access: {
        read: ()=>true
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'ageRange',
            type: 'text',
            label: 'Age Range (e.g., 0-3 years)'
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Short Description'
        },
        {
            name: 'content',
            type: 'richText'
        },
        {
            name: 'icon',
            type: 'select',
            options: [
                {
                    label: 'Graduation Cap',
                    value: 'graduation-cap'
                },
                {
                    label: 'Heart',
                    value: 'heart'
                },
                {
                    label: 'Star',
                    value: 'star'
                },
                {
                    label: 'User',
                    value: 'user'
                }
            ]
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media'
        }
    ]
};
}),
"[project]/src/collections/Courses.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Courses",
    ()=>Courses
]);
const Courses = {
    slug: 'courses',
    admin: {
        useAsTitle: 'title',
        defaultColumns: [
            'title',
            'duration',
            'updatedAt'
        ]
    },
    access: {
        read: ()=>true
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'duration',
            type: 'text',
            label: 'Duration (e.g., 40 hours)'
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Short Description'
        },
        {
            name: 'content',
            type: 'richText'
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media'
        }
    ]
};
}),
"[project]/src/globals/HomePage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomePage",
    ()=>HomePage
]);
const HomePage = {
    slug: 'home-page',
    label: 'Home Page',
    access: {
        read: ()=>true
    },
    fields: [
        {
            name: 'hero',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    defaultValue: '35 años',
                    required: true
                },
                {
                    name: 'subtitle',
                    type: 'text',
                    defaultValue: 'apoyando la inclusión!',
                    required: true
                },
                {
                    name: 'backgroundType',
                    type: 'select',
                    defaultValue: 'video',
                    options: [
                        {
                            label: 'Video',
                            value: 'video'
                        },
                        {
                            label: 'Image',
                            value: 'image'
                        }
                    ]
                },
                {
                    name: 'videoUrl',
                    type: 'text',
                    defaultValue: 'https://www.w3schools.com/html/mov_bbb.mp4',
                    admin: {
                        condition: (_, siblingData)=>siblingData.backgroundType === 'video'
                    }
                },
                {
                    name: 'backgroundImage',
                    type: 'upload',
                    relationTo: 'media',
                    admin: {
                        condition: (_, siblingData)=>siblingData.backgroundType === 'image'
                    }
                }
            ]
        },
        {
            name: 'about',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    defaultValue: '35 años trabajando por mejorar la calidad de vida de niños, niñas y jóvenes en condición de discapacidad'
                },
                {
                    name: 'description',
                    type: 'textarea',
                    defaultValue: 'Tratamientos y terapias con el Modelo de práctica contemporáneo de Neurodesarrollo y protocolo intensivo Pediasuit Orientación y apoyo a las familias'
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media'
                },
                {
                    name: 'ctaText',
                    type: 'text',
                    defaultValue: 'CONTÁCTANOS'
                },
                {
                    name: 'ctaLink',
                    type: 'text',
                    defaultValue: '/contacto'
                },
                {
                    name: 'statsValue',
                    type: 'text',
                    defaultValue: '+35'
                },
                {
                    name: 'statsLabel',
                    type: 'textarea',
                    defaultValue: 'años\napoyando la\ninclusión!'
                }
            ]
        },
        {
            name: 'programs',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    defaultValue: 'Nuestros Programas'
                },
                {
                    name: 'description',
                    type: 'textarea',
                    defaultValue: 'Programa terapéutico integral para apoyar el desarrollo psicomotor.'
                },
                {
                    name: 'list',
                    type: 'array',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'description',
                            type: 'textarea'
                        }
                    ]
                }
            ]
        },
        {
            name: 'cta',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    defaultValue: '35 años apoyando la inclusión'
                },
                {
                    name: 'buttonText',
                    type: 'text',
                    defaultValue: 'CONTÁCTANOS'
                },
                {
                    name: 'buttonLink',
                    type: 'text',
                    defaultValue: '/contacto'
                },
                {
                    name: 'backgroundImage',
                    type: 'upload',
                    relationTo: 'media'
                }
            ]
        },
        {
            name: 'recognitions',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    defaultValue: 'Nuestros Reconocimientos'
                },
                {
                    name: 'list',
                    type: 'array',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'meta',
                            type: 'text'
                        },
                        {
                            name: 'description',
                            type: 'textarea'
                        },
                        {
                            name: 'image',
                            type: 'upload',
                            relationTo: 'media'
                        }
                    ]
                }
            ]
        }
    ]
};
}),
"[project]/src/globals/HeaderConfig.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderConfig",
    ()=>HeaderConfig
]);
const HeaderConfig = {
    slug: 'header-config',
    label: 'Header Configuration',
    access: {
        read: ()=>true
    },
    fields: [
        {
            name: 'navLinks',
            type: 'array',
            label: 'Navigation Links',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true
                },
                {
                    name: 'href',
                    type: 'text',
                    defaultValue: '#',
                    admin: {
                        description: 'Use # if this is a dropdown parent'
                    }
                },
                {
                    name: 'hasDropdown',
                    type: 'checkbox',
                    defaultValue: false
                },
                {
                    name: 'subLinks',
                    type: 'array',
                    label: 'Sub Links (Dropdown Items)',
                    admin: {
                        condition: (_, siblingData)=>siblingData.hasDropdown === true
                    },
                    fields: [
                        {
                            name: 'name',
                            type: 'text',
                            required: true
                        },
                        {
                            name: 'href',
                            type: 'text',
                            required: true
                        }
                    ]
                }
            ]
        }
    ]
};
}),
"[project]/src/payload.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$sqlite__$5b$external$5d$__$2840$payloadcms$2f$db$2d$sqlite$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$sqlite$29$__ = __turbopack_context__.i("[externals]/@payloadcms/db-sqlite [external] (@payloadcms/db-sqlite, esm_import, [project]/node_modules/@payloadcms/db-sqlite)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/richtext-lexical/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Users.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Media.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Posts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Pages.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Programs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Programs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/collections/Courses.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globals$2f$HomePage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/globals/HomePage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globals$2f$HeaderConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/globals/HeaderConfig.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$sqlite__$5b$external$5d$__$2840$payloadcms$2f$db$2d$sqlite$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$sqlite$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$sqlite__$5b$external$5d$__$2840$payloadcms$2f$db$2d$sqlite$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$sqlite$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("src/payload.config.ts")}`;
    }
};
;
;
;
;
;
;
;
;
;
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["buildConfig"])({
    admin: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Users"].slug,
        importMap: {
            baseDir: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname)
        }
    },
    collections: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Users"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Media"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Posts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Pages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Programs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Programs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$collections$2f$Courses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Courses"]
    ],
    globals: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globals$2f$HomePage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globals$2f$HeaderConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeaderConfig"]
    ],
    editor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lexicalEditor"])(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname, 'payload-types.ts')
    },
    db: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$sqlite__$5b$external$5d$__$2840$payloadcms$2f$db$2d$sqlite$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$sqlite$29$__["sqliteAdapter"])({
        client: {
            url: process.env.DATABASE_URI || ''
        }
    })
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/Hero.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Hero.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Hero.tsx <module evaluation>", "default");
}),
"[project]/src/components/Hero.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Hero.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Hero.tsx", "default");
}),
"[project]/src/components/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/AboutSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/AboutSection.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/AboutSection.tsx <module evaluation>", "default");
}),
"[project]/src/components/AboutSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/AboutSection.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/AboutSection.tsx", "default");
}),
"[project]/src/components/AboutSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/AboutSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/AboutSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ProgramsSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ProgramsSection.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ProgramsSection.tsx <module evaluation>", "default");
}),
"[project]/src/components/ProgramsSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ProgramsSection.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ProgramsSection.tsx", "default");
}),
"[project]/src/components/ProgramsSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgramsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ProgramsSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgramsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ProgramsSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgramsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/CtaSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/CtaSection.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/CtaSection.tsx <module evaluation>", "default");
}),
"[project]/src/components/CtaSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/CtaSection.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/CtaSection.tsx", "default");
}),
"[project]/src/components/CtaSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CtaSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/CtaSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CtaSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/CtaSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CtaSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/NewsSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/NewsSection.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/NewsSection.tsx <module evaluation>", "default");
}),
"[project]/src/components/NewsSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/NewsSection.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/NewsSection.tsx", "default");
}),
"[project]/src/components/NewsSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/NewsSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/NewsSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/RecognitionsSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/RecognitionsSection.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/RecognitionsSection.tsx <module evaluation>", "default");
}),
"[project]/src/components/RecognitionsSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/RecognitionsSection.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/RecognitionsSection.tsx", "default");
}),
"[project]/src/components/RecognitionsSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecognitionsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/RecognitionsSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecognitionsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/RecognitionsSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecognitionsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/wp.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHomePage",
    ()=>getHomePage,
    "getLatestPosts",
    ()=>getLatestPosts
]);
// Use environment variable or default to the live URL
const WP_API_URL = ("TURBOPACK compile-time value", "https://aconino.org/wp-json/wp/v2") || "https://aconino.org/wp-json/wp/v2";
async function getLatestPosts(limit = 3) {
    try {
        const res = await fetch(`${WP_API_URL}/posts?per_page=${limit}&_embed=1`, {
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch posts: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching WP posts:", error);
        return [];
    }
}
async function getHomePage() {
    try {
        // We'll try to fetch by slug 'inicio' or 'home'. Modify this if the slug is different.
        const res = await fetch(`${WP_API_URL}/pages?slug=inicio,home&_embed=1`, {
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch home page: ${res.statusText}`);
        }
        const pages = await res.json();
        if (pages.length > 0) {
            return pages[0]; // Return the first matching page
        }
        return null;
    } catch (error) {
        console.error("Error fetching WP home page:", error);
        return null;
    }
}
}),
"[project]/src/app/(app)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import, [project]/node_modules/payload)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/payload.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AboutSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgramsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProgramsSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CtaSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CtaSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NewsSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecognitionsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RecognitionsSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wp$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wp.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
async function Home() {
    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wp$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestPosts"])(6); // Fetches up to 6 for the slider
    // Fetch Global configuration from Payload
    const payload = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$payload$29$__["getPayload"])({
        config: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    });
    const homePage = await payload.findGlobal({
        slug: "home-page"
    });
    // Map Payload Global to the 'acf' format our components expect (or direct data)
    const acf = {
        hero_title: homePage.hero?.title,
        hero_subtitle: homePage.hero?.subtitle,
        hero_background_type: homePage.hero?.backgroundType,
        hero_video_url: homePage.hero?.videoUrl,
        hero_image: typeof homePage.hero?.backgroundImage === 'object' && homePage.hero.backgroundImage !== null ? homePage.hero.backgroundImage.url : null,
        about_title: homePage.about?.title,
        about_description: homePage.about?.description,
        about_image: typeof homePage.about?.image === 'object' && homePage.about.image !== null ? homePage.about.image.url : null,
        about_cta_text: homePage.about?.ctaText,
        about_cta_link: homePage.about?.ctaLink,
        stats_1_value: homePage.about?.statsValue,
        stats_1_label: homePage.about?.statsLabel,
        hero_cta_text: homePage.cta?.buttonText,
        hero_cta_link: homePage.cta?.buttonLink
    };
    const mappedPrograms = homePage.programs?.list?.map((p)=>({
            title: p.title,
            desc: p.description
        }));
    const mappedRecognitions = homePage.recognitions?.list?.map((r)=>({
            title: r.title,
            meta: r.meta,
            description: r.description,
            imageUrl: typeof r.image === 'object' && r.image !== null ? r.image.url : null
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                acf: acf
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                acf: acf
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            mappedPrograms && mappedPrograms.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgramsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                programs: mappedPrograms
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgramsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 58,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CtaSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                acf: acf
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                posts: posts
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            mappedRecognitions && mappedRecognitions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecognitionsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                recognitions: mappedRecognitions
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RecognitionsSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(app)/page.tsx",
                lineNumber: 65,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(app)/page.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(app)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b6c21372._.js.map