export default [
    {
        "name": "@zui/alert",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "消息框",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/alert",
            "workspace": true,
            "sourceType": "build-in",
            "name": "alert",
            "order": 200000000
        }
    },
    {
        "name": "@zui/avatar",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "头像",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/avatar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "avatar",
            "order": 200000001
        }
    },
    {
        "name": "@zui/avatar-group",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "dependencies": {
            "@zui/avatar": "workspace:0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "头像组",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/avatar-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "avatar-group",
            "order": 400000002
        }
    },
    {
        "name": "@zui/avatar-js",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "files": [
            "./src/**/*"
        ],
        "keywords": [
            "js",
            "zui:component"
        ],
        "dependencies": {
            "preact": "^10.10.0",
            "@zui/avatar": "workspace:*",
            "@zui/browser-helpers": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "components",
            "displayName": "头像生成器",
            "contributes": {
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/avatar-js",
            "workspace": true,
            "sourceType": "build-in",
            "name": "avatar-js",
            "order": null
        }
    },
    {
        "name": "@zui/base",
        "version": "0.0.1",
        "description": "ZUI basic settings",
        "keywords": [
            "css",
            "zui:css-base"
        ],
        "main": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "css-base",
            "displayName": "CSS 基础",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/base",
            "workspace": true,
            "sourceType": "build-in",
            "name": "base",
            "order": 100000004
        }
    },
    {
        "name": "@zui/breadcrumb",
        "version": "0.0.1",
        "description": "ZUI breadcrumb",
        "keywords": [
            "css",
            "components"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "files": [],
        "zui": {
            "type": "control",
            "displayName": "面包屑",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/breadcrumb",
            "workspace": true,
            "sourceType": "build-in",
            "name": "breadcrumb",
            "order": 200000005
        }
    },
    {
        "name": "@zui/icons",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/browser-helpers": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "图标",
            "contributes": {
                "css": [
                    "class",
                    "var",
                    "fonts"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/icons",
            "workspace": true,
            "sourceType": "build-in",
            "name": "icons",
            "order": 200000014
        }
    },
    {
        "name": "@zui/input",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "@zui/form": "workspace:0.0.1"
        },
        "zui": {
            "type": "control",
            "displayName": "输入框",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/input",
            "workspace": true,
            "sourceType": "build-in",
            "name": "input",
            "order": 200000015
        }
    },
    {
        "name": "@zui/label",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "标签",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/label",
            "workspace": true,
            "sourceType": "build-in",
            "name": "label",
            "order": 200000017
        }
    },
    {
        "name": "@zui/progress-circle",
        "version": "0.0.1",
        "description": "ZUI progress-circle",
        "keywords": [
            "js",
            "zui:js-progress-circle"
        ],
        "module": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "control",
            "displayName": "环形进度条",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/progress-circle",
            "workspace": true,
            "sourceType": "build-in",
            "name": "progress-circle",
            "order": 200000021
        }
    },
    {
        "name": "@zui/scrollbar",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "js",
            "zui:component"
        ],
        "files": [
            "./src/**/*"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "dependencies": {
            "preact": "^10.10.0",
            "@zui/browser-helpers": "workspace:^0.0.1"
        },
        "zui": {
            "type": "control",
            "displayName": "滚动条",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/scrollbar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "scrollbar",
            "order": 200000022
        }
    },
    {
        "name": "@zui/browser-helpers",
        "version": "0.0.1",
        "description": "ZUI helpers",
        "keywords": [
            "js",
            "zui:js-helpers"
        ],
        "browser": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "js-helpers",
            "displayName": "浏览器辅助方法",
            "contributes": {
                "js": [
                    "method"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/browser-helpers",
            "workspace": true,
            "sourceType": "build-in",
            "name": "browser-helpers",
            "order": 300000006
        }
    },
    {
        "name": "@zui/btn-group",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "dependencies": {
            "@zui/button": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/dropdown": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "按钮组",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/btn-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "btn-group",
            "order": 400000007
        }
    },
    {
        "name": "@zui/button",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "files": [
            "./src/**/*"
        ],
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "按钮",
            "displayName": "按钮",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/button",
            "workspace": true,
            "sourceType": "build-in",
            "name": "button",
            "order": null
        }
    },
    {
        "name": "@zui/checkbox",
        "version": "0.0.1",
        "description": "ZUI checkbox",
        "keywords": [
            "css",
            "components"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "@zui/form": "workspace:*"
        },
        "files": [],
        "zui": {
            "type": "control",
            "displayName": "复选框和单选框",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/checkbox",
            "workspace": true,
            "sourceType": "build-in",
            "name": "checkbox",
            "order": 200000009
        }
    },
    {
        "name": "@zui/dropdown",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "js-ui",
            "displayName": "下拉菜单",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/dropdown",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dropdown",
            "order": null
        }
    },
    {
        "name": "@zui/dtable",
        "version": "0.0.1",
        "description": "ZUI datatable",
        "keywords": [
            "js",
            "cs",
            "zui:component"
        ],
        "browser": "src/main.ts",
        "dependencies": {
            "@zui/browser-helpers": "workspace:^0.0.1",
            "@zui/helpers": "workspace:^0.0.1",
            "@zui/scrollbar": "workspace:^0.0.1",
            "nanoid": "^4.0.0",
            "preact": "^10.10.0"
        },
        "exports": {
            ".": "./src/main.ts",
            "./react": "./src/main-react.ts",
            "./plugins/": "./src/plugins/"
        },
        "files": [
            "./src/**/*"
        ],
        "devDependencies": {
            "@faker-js/faker": "^7.4.0",
            "@zui/label": "workspace:^0.0.1",
            "@zui/avatar": "workspace:^0.0.1"
        },
        "zui": {
            "type": "js-ui",
            "displayName": "数据表格",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/dtable",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dtable",
            "order": null
        }
    },
    {
        "name": "@zui/store",
        "version": "0.0.1",
        "description": "ZUI localstorage helper",
        "keywords": [
            "js",
            "zui:js-lib"
        ],
        "browser": "src/main.ts",
        "dependencies": {
            "nanoid": "^4.0.0"
        },
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "js-helpers",
            "displayName": "本地存储",
            "contributes": {
                "js": [
                    "module"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/store",
            "workspace": true,
            "sourceType": "build-in",
            "name": "store",
            "order": 300000023
        }
    },
    {
        "name": "@zui/form",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css"
        ],
        "dependencies": {
            "@zui/utilities": "workspace:*",
            "@zui/base": "workspace:*"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "表单",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/form",
            "workspace": true,
            "sourceType": "build-in",
            "name": "form",
            "order": 400000012
        }
    },
    {
        "name": "@zui/input-group",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "dependencies": {
            "@zui/form": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:^0.0.1",
            "@zui/dropdown": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "输入组",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/input-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "input-group",
            "order": 400000016
        }
    },
    {
        "name": "@zui/modal",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "模态框",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/modal",
            "workspace": true,
            "sourceType": "build-in",
            "name": "modal",
            "order": 400000018
        }
    },
    {
        "name": "@zui/nav",
        "version": "0.0.1",
        "description": "ZUI nav",
        "keywords": [
            "css",
            "components"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "component",
            "displayName": "导航",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/nav",
            "workspace": true,
            "sourceType": "build-in",
            "name": "nav",
            "order": 400000019
        }
    },
    {
        "name": "@zui/panel",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/table": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "面板",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/panel",
            "workspace": true,
            "sourceType": "build-in",
            "name": "panel",
            "order": 400000020
        }
    },
    {
        "name": "@zui/table",
        "version": "0.0.1",
        "description": "ZUI table",
        "keywords": [
            "css",
            "js",
            "components"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "component",
            "displayName": "表格",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/table",
            "workspace": true,
            "sourceType": "build-in",
            "name": "table",
            "order": 400000024
        }
    },
    {
        "name": "@zui/utilities",
        "version": "0.0.1",
        "description": "ZUI css utilities",
        "keywords": [
            "css",
            "zui:css-utilities"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/base": "workspace:*"
        },
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "css-utilities",
            "displayName": "CSS 工具类",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/utilities",
            "workspace": true,
            "sourceType": "build-in",
            "name": "utilities",
            "order": 500000025
        }
    },
    {
        "name": "@zui/helpers",
        "version": "0.0.1",
        "description": "ZUI helpers",
        "keywords": [
            "js",
            "zui:js-helpers"
        ],
        "module": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "js-lib",
            "displayName": "JS 辅助方法",
            "contributes": {
                "js": [
                    "class",
                    "var",
                    "method"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/helpers",
            "workspace": true,
            "sourceType": "build-in",
            "name": "helpers",
            "order": 600000013
        }
    }
];