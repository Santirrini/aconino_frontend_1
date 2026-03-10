module.exports = [
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
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$globals$2f$HomePage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePage"]
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/app/(payload)/admin/importMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "importMap",
    ()=>importMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$cell$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/richtext-lexical/dist/cell/rscEntry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/richtext-lexical/dist/field/rscEntry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/richtext-lexical/dist/field/Diff/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/richtext-lexical/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/ui/dist/widgets/CollectionCards/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$cell$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$cell$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const importMap = {
    "@payloadcms/richtext-lexical/rsc#RscEntryLexicalCell": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$cell$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RscEntryLexicalCell"],
    "@payloadcms/richtext-lexical/rsc#RscEntryLexicalField": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$rscEntry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RscEntryLexicalField"],
    "@payloadcms/richtext-lexical/rsc#LexicalDiffComponent": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$field$2f$Diff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LexicalDiffComponent"],
    "@payloadcms/richtext-lexical/client#InlineToolbarFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InlineToolbarFeatureClient"],
    "@payloadcms/richtext-lexical/client#HorizontalRuleFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HorizontalRuleFeatureClient"],
    "@payloadcms/richtext-lexical/client#UploadFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UploadFeatureClient"],
    "@payloadcms/richtext-lexical/client#BlockquoteFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BlockquoteFeatureClient"],
    "@payloadcms/richtext-lexical/client#RelationshipFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RelationshipFeatureClient"],
    "@payloadcms/richtext-lexical/client#LinkFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LinkFeatureClient"],
    "@payloadcms/richtext-lexical/client#ChecklistFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChecklistFeatureClient"],
    "@payloadcms/richtext-lexical/client#OrderedListFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderedListFeatureClient"],
    "@payloadcms/richtext-lexical/client#UnorderedListFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnorderedListFeatureClient"],
    "@payloadcms/richtext-lexical/client#IndentFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IndentFeatureClient"],
    "@payloadcms/richtext-lexical/client#AlignFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AlignFeatureClient"],
    "@payloadcms/richtext-lexical/client#HeadingFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadingFeatureClient"],
    "@payloadcms/richtext-lexical/client#ParagraphFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParagraphFeatureClient"],
    "@payloadcms/richtext-lexical/client#InlineCodeFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InlineCodeFeatureClient"],
    "@payloadcms/richtext-lexical/client#SuperscriptFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SuperscriptFeatureClient"],
    "@payloadcms/richtext-lexical/client#SubscriptFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubscriptFeatureClient"],
    "@payloadcms/richtext-lexical/client#StrikethroughFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StrikethroughFeatureClient"],
    "@payloadcms/richtext-lexical/client#UnderlineFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnderlineFeatureClient"],
    "@payloadcms/richtext-lexical/client#BoldFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BoldFeatureClient"],
    "@payloadcms/richtext-lexical/client#ItalicFeatureClient": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ItalicFeatureClient"],
    "@payloadcms/next/rsc#CollectionCards": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$widgets$2f$CollectionCards$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionCards"]
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(payload)/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40b8d71305639dc504b44fb060e9949845d68819e6":"$$RSC_SERVER_ACTION_0"},"",""] */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/payload.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/layouts/Root/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/next/dist/utilities/handleServerFunctions.js [app-rsc] (ecmascript)");
// @ts-expect-error
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(payload)/admin/importMap.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const metadata = {
    title: 'Payload Admin'
};
;
const $$RSC_SERVER_ACTION_0 = async function serverFunction(args) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleServerFunctions"])({
        ...args,
        config: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        importMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importMap"]
    });
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "40b8d71305639dc504b44fb060e9949845d68819e6", null);
const serverFunction = $$RSC_SERVER_ACTION_0;
const Layout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RootLayout"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        importMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$payload$292f$admin$2f$importMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importMap"],
        serverFunction: serverFunction,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/(payload)/layout.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Layout;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__84bd700e._.js.map