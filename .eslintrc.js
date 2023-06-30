module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
        'vue/max-attributes-per-line': [
            0,
            {
                singleline: 10,
                multiline: {
                    max: 1,
                    allowFirstLine: false
                }
            }
        ],
        'vue/attribute-hyphenation': 0,
        'vue/require-default-prop': 0,
        'vue/no-parsing-error': 0,
        'vue/mustache-interpolation-spacing': 0,
        'vue/attributes-order': 0,
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/name-property-casing': ['error', 'PascalCase'],
        'vue/no-v-html': 'off',
        'vue/html-indent': [
            0,
            2,
            {
                attribute: 2,
                baseIndent: 2,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'vue/order-in-components': 0,
        'vue/html-self-closing': 0,
        'vue/html-closing-bracket-newline': 0,
        'arrow-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'constructor-super': 2,
        'generator-star-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'no-spaced-func': 2,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'template-curly-spacing': [2, 'never'],
        'yield-star-spacing': [2, 'both'],
        'prefer-const': 0,

        // allow debugger during development
        // Possible Errors 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关
        'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
        'no-constant-condition': 2, // 禁止在条件中使用常量表达式
        'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
        'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
        'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
        'no-duplicate-case': 2, // 禁止出现重复的 case 标签
        'no-empty-character-class': 2, // 禁止在正则表达式中使用空字符集
        'no-empty': 2, // 禁止出现空语句块
        'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值
        'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
        'no-extra-parens': 0, // 禁止不必要的括号
        'no-extra-semi': 2, // 禁止不必要的分号
        'no-func-assign': 2, // 禁止对 function 声明重新赋值
        'no-inner-declarations': 2, // 禁止在嵌套的块中出现变量声明或 function 声明
        'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
        'no-irregular-whitespace': 0, // 禁止在字符串和注释之外不规则的空白
        'no-obj-calls': 2, // 禁止把全局对象作为函数调用
        'no-prototype-builtins': 0, // 禁止直接调用 Object.prototypes 的内置属性
        'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
        'no-sparse-arrays': 2, // 禁用稀疏数组
        'no-template-curly-in-string': 0, // disallow template literal placeholder syntax in regular strings
        'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
        'no-unreachable': 2, // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
        'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
        'no-unsafe-negation': 0, // disallow negating the left operand of relational operators
        'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
        'valid-jsdoc': [
            0,
            {
                // 强制使用有效的 JSDoc 注释
                requireReturn: false,
                requireParamDescription: true,
                requireReturnDescription: false
            }
        ],
        'valid-typeof': 0, // 强制 typeof 表达式与有效的字符串进行比较

        // Best Practices 这些规则是关于最佳实践的，帮助你避免一些问题
        'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
        'array-callback-return': 0, // 强制数组方法的回调函数中有 return 语句
        'block-scoped-var': 0, // 强制把变量的使用限制在其定义的作用域范围内
        'class-methods-use-this': 0, // enforce that class methods utilize this
        complexity: 0, // 指定程序中允许的最大环路复杂度
        'consistent-return': 0, // 要求 return 语句要么总是指定返回的值，要么不指定
        curly: 0, // 强制所有控制语句使用一致的括号风格
        'default-case': 2, // 要求 switch 语句中有 default 分支
        'dot-location': 0, // 强制在点号之前和之后一致的换行
        'dot-notation': 0, // 强制尽可能地使用点号
        // eqeqeq: 2, // 要求使用 === 和 !==
        'guard-for-in': 0, // 要求 for-in 循环中有一个 if 语句
        'no-alert': 0, // 禁用 alert、confirm 和 prompt
        'no-caller': 2, // 禁用 arguments.caller 或 arguments.callee
        'no-case-declarations': 2, // 不允许在 case 子句中使用词法声明
        'no-div-regex': 0, // 禁止除法操作符显式的出现在正则表达式开始的位置
        // 'no-else-return': 2, // 禁止 if 语句中 return 语句之后有 else 块
        'no-empty-function': 2, // 禁止出现空函数
        'no-empty-pattern': 2, // 禁止使用空解构模式
        'no-eq-null': 2, // 禁止在没有类型检查操作符的情况下与 null 进行比较
        'no-eval': 2, // 禁用 eval()
        'no-extend-native': 2, // 禁止扩展原生类型
        'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
        'no-extra-label': 2, // 禁用不必要的标签
        'no-fallthrough': 2, // 禁止 case 语句落空
        'no-floating-decimal': 0, // 禁止数字字面量中使用前导和末尾小数点
        'no-global-assign': 0, // disallow assignments to native objects or read-only global variables
        'no-implicit-coercion': 0, // 禁止使用短符号进行类型转换
        'no-implicit-globals': 2, // 禁止在全局范围内使用变量声明和 function 声明
        'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
        'no-invalid-this': 2, // 禁止 this 关键字出现在类和类对象之外
        'no-iterator': 2, // 禁用 __iterator__ 属性
        'no-labels': 2, // 禁用标签语句
        'no-lone-blocks': 2, // 禁用不必要的嵌套块
        'no-loop-func': 2, // 禁止在循环中出现 function 声明和表达式
        'no-magic-numbers': 0, // 禁用魔术数字
        'no-multi-spaces': 0, // 禁止使用多个空格
        'no-multi-str': 2, // 禁止使用多行字符串
        'no-new-func': 2, // 禁止对 Function 对象使用 new 操作符
        'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-new': 0, // 禁止在非赋值或条件语句中使用 new 操作符
        'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
        'no-octal': 2, // 禁用八进制字面量
        'no-param-reassign': 'off', // 禁止对 function 的参数进行重新赋值
        'no-proto': 2, // 禁用 __proto__ 属性
        'no-redeclare': 2, // 禁止多次声明同一变量
        'no-restricted-properties': 0, // disallow certain properties on certain objects
        'no-return-assign': 0, // 禁止在 return 语句中使用赋值语句
        'no-script-url': 0, // 禁止使用 javascript: url
        'no-self-assign': 2, // 禁止自我赋值
        'no-self-compare': 2, // 禁止自身比较
        'no-sequences': 0, // 禁用逗号操作符
        'no-throw-literal': 0, // 禁止抛出异常字面量
        'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
        'no-unused-expressions': 0, // 禁止出现未使用过的表达式
        'no-unused-labels': 2, // 禁用出现未使用过的标
        'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
        'no-useless-concat': 0, // 禁止不必要的字符串字面量或模板字面量的连接
        'no-useless-escape': 0, // 禁用不必要的转义字符
        'no-useless-return': 0, // disallow redundant return statements
        // 'no-void': 2, // 禁用 void 操作符
        'no-warning-comments': 2, // 禁止在注释中使用特定的警告术语
        'no-with': 2, // 禁用 with 语句
        radix: 2, // 强制在parseInt()使用基数参数
        'vars-on-top': 0, // 要求所有的 var 声明出现在它们所在的作用域顶部
        'wrap-iife': 0, // 要求 IIFE 使用括号括起来
        yoda: 0, // 要求或禁止 “Yoda” 条件

        // Strict Mode 该规则与使用严格模式和严格模式指令有关
        strict: 1,

        // Variables 这些规则与变量声明有关
        'init-declarations': 0, // 要求或禁止 var 声明中的初始化
        'no-catch-shadow': 2, // 禁止 catch 子句的参数与外层作用域中的变量同名
        'no-delete-var': 2, // 禁止删除变量
        'no-label-var': 0, // 不允许标签与变量同名
        'no-restricted-globals': 0, // 禁用特定的全局变量
        'no-shadow-restricted-names': 0, // 禁止覆盖受限制的标识符
        'no-shadow': 0, // 禁止变量声明与外层作用域的变量同名
        'no-undef-init': 2, // 禁止将变量初始化为 undefined
        'no-undef': 0, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        'no-undefined': 0, // 禁止将 undefined 作为标识符
        'no-unused-vars': [
            2,
            {
                varsIgnorePattern: '.*',
                args: 'none'
            }
        ], // 禁止出现未使用过的变量
        'no-use-before-define': 0, // 禁止在变量定义之前使用它们

        // Node.js and CommonJS 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的
        'callback-return': 0, // require return statements after callbacks
        'global-require': 0, // 要求 require() 出现在顶层模块作用域中
        'handle-callback-err': 0, // 要求回调函数中有容错处理
        'no-mixed-requires': 0, // 禁止混合常规变量声明和 require 调用
        'no-new-require': 0, // 禁止调用 require 时使用 new 操作符
        'no-path-concat': 0, // 禁止对 __dirname 和 __filename 进行字符串连接
        'no-process-env': 0, // 禁用 process.env
        'no-process-exit': 0, // 禁用 process.exit()
        'no-restricted-modules': 0, // 禁用通过 require 加载的指定模块
        'no-sync': 0, // 禁用同步方法

        // Stylistic Issues 这些规则是关于风格指南的，而且是非常主观的
        'array-bracket-spacing': 0, // 强制数组方括号中使用一致的空格
        'block-spacing': 0, // 强制在单行代码块中使用一致的空格
        'brace-style': 0, // 强制在代码块中使用一致的大括号风格
        camelcase: 0, // 强制使用骆驼拼写法命名约定
        'comma-dangle': 0, // 要求或禁止末尾逗号
        'comma-spacing': 0, // 强制在逗号前后使用一致的空格
        'comma-style': 0, // 强制使用一致的逗号风格
        'computed-property-spacing': 0, // 强制在计算的属性的方括号中使用一致的空格
        'consistent-this': 0, // 当获取当前执行环境的上下文时，强制使用一致的命名
        'eol-last': 0, // 要求或禁止文件末尾存在空行
        'func-call-spacing': 0, // require or disallow spacing between function identifiers and their invocations
        'func-name-matching': 0, // require function names to match the name of the variable or property to which they are assigned
        'func-names': 0, // 要求或禁止使用命名的 function 表达式
        'func-style': 0, // 强制一致地使用 function 声明或表达式
        'id-blacklist': 0, // 禁用指定的标识符
        'id-length': 0, // 强制标识符的最小和最大长度
        'id-match': 0, // 要求标识符匹配一个指定的正则表达式
        indent: 'off', // 强制使用一致的缩进
        'jsx-quotes': 0, // 强制在 JSX 属性中一致地使用双引号或单引号
        'key-spacing': 0, // 强制在对象字面量的属性中键和值之间使用一致的间距
        'keyword-spacing': 0, // 强制在关键字前后使用一致的空格
        'line-comment-position': 0, // enforce position of line comments
        'linebreak-style': 0, // 强制使用一致的换行风格
        'lines-around-comment': 0, // 要求在注释周围有空行
        'lines-around-directive': 0, // require or disallow newlines around directives
        'max-depth': 0, // 强制可嵌套的块的最大深度
        'max-len': 0, // 强制一行的最大长度
        'max-lines': 0, // 强制最大行数
        'max-nested-callbacks': 0, // 强制回调函数最大嵌套深度
        'max-params': 0, // 强制函数定义中最多允许的参数数量
        'max-statements-per-line': 0, // 强制每一行中所允许的最大语句数量
        'max-statements': 0, // 强制函数块最多允许的的语句数量
        'multiline-ternary': 0, // enforce newlines between operands of ternary expressions
        'new-cap': 0, // 要求构造函数首字母大写
        'new-parens': 0, // 要求调用无参构造函数时有圆括号
        'newline-after-var': 0, // 要求或禁止变量声明语句后有一行空行
        'newline-before-return': 0, // 要求 return 语句之前有一空行
        'newline-per-chained-call': 0, // 要求方法链中每个调用都有一个换行符
        'no-array-constructor': 0, // 禁用 Array 构造函数
        'no-bitwise': 0, // 禁用按位运算符
        'no-continue': 0, // 禁用 continue 语句
        'no-inline-comments': 0, // 禁止在代码后使用内联注释
        'no-lonely-if': 0, // 禁止 if 作为唯一的语句出现在 else 语句中
        'no-mixed-operators': 0, // 禁止混合使用不同的操作符
        'no-mixed-spaces-and-tabs': 0, // 禁止空格和 tab 的混合缩进
        'no-multiple-empty-lines': 0, // 禁止出现多行空行
        'no-negated-condition': 0, // 禁用否定的表达式
        'no-nested-ternary': 0, // 禁用嵌套的三元表达式
        'no-new-object': 0, // 禁用 Object 的构造函数
        'no-plusplus': 0, // 禁用一元操作符 ++ 和 --
        'no-restricted-syntax': 0, // 禁用特定的语法
        'no-tabs': 0, // disallow tabs in file
        'no-ternary': 0, // 禁用三元操作符
        'no-trailing-spaces': 0, // 禁用行尾空格
        'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线
        'no-unneeded-ternary': 0, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        'no-whitespace-before-property': 0, // 禁止属性前有空白
        'object-curly-newline': 0, // 强制大括号内换行符的一致性
        'object-curly-spacing': 0, // 强制在大括号中使用一致的空格
        'object-property-newline': 0, // 强制将对象的属性放在不同的行上
        'one-var-declaration-per-line': 0, // 要求或禁止在变量声明周围换行
        'one-var': 0, // 强制函数中的变量要么一起声明要么分开声明
        'operator-assignment': 0, // 要求或禁止在可能的情况下使用简化的赋值操作符
        'operator-linebreak': 0, // 强制操作符使用一致的换行符
        'padded-blocks': 0, // 要求或禁止块内填充
        'quote-props': 0, // 要求对象字面量属性名称用引号括起来
        quotes: 0, // 强制使用一致的反勾号、双引号或单引号
        'require-jsdoc': 0, // 要求使用 JSDoc 注释
        'semi-spacing': 0, // 强制分号之前和之后使用一致的空格
        semi: 0, // 要求或禁止使用分号而不是 ASI
        'sort-keys': 0, // require object keys to be sorted
        'sort-vars': 0, // 要求同一个声明块中的变量按顺序排列
        'space-before-blocks': 0, // 强制在块之前使用一致的空格
        'space-before-function-paren': 0, // 强制在 function的左括号之前使用一致的空格
        'space-in-parens': 0, // 强制在圆括号内使用一致的空格
        'space-infix-ops': 0, // 要求操作符周围有空格
        'space-unary-ops': 0, // 强制在一元操作符前后使用一致的空格
        'spaced-comment': 0, // 强制在注释中 // 或 /* 使用一致的空格
        'unicode-bom': 0, // 要求或禁止 Unicode 字节顺序标记 (BOM)
        'wrap-regex': 0 // 要求正则表达式被括号括起来
    },
    globals: {
        defineProps: true,
        defineExpose: true,
        defineEmits: true,
        download: true,
        DEFAULT_PAGE_SIZE: true
    }
};
