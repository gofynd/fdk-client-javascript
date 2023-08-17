export = ThemeApplicationModel;
/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */
/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef AssetsSchema
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 * @property {UmdJs} [umd_js]
 */
/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageRoutePredicate} [route]
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 */
/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [exact_url]
 * @property {Object} [query]
 * @property {string} [selected]
 */
/**
 * @typedef AvailablePageSchema
 * @property {string} [_id]
 * @property {string} [path]
 * @property {Object[]} [props]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {AvailablePageSeo} [seo]
 * @property {string} [text]
 * @property {string} [theme]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef AvailablePageSchemaSections
 * @property {Object[]} [blocks]
 * @property {string} [label]
 * @property {string} [name]
 * @property {AvailablePagePredicate} [predicate]
 * @property {Object} [preset]
 * @property {Object} [props]
 */
/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [desktop]
 * @property {boolean} [mobile]
 * @property {boolean} [tablet]
 */
/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */
/**
 * @typedef AvailablePageSeo
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [title]
 */
/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [anonymous]
 * @property {boolean} [authenticated]
 */
/**
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [label]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 */
/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef Blocks
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 * @property {string} [type]
 */
/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */
/**
 * @typedef Bold
 * @property {string} [file]
 * @property {string} [name]
 */
/**
 * @typedef Colors
 * @property {string} [accent_color]
 * @property {string} [bg_color]
 * @property {string} [button_secondary_color]
 * @property {string} [link_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 */
/**
 * @typedef CommonJs
 * @property {string} [link]
 */
/**
 * @typedef Config
 * @property {string} [current]
 * @property {GlobalSchema} [global_schema]
 * @property {ListSchemaItem[]} [list]
 * @property {Preset} [preset]
 */
/**
 * @typedef ConfigPage
 * @property {string} [page]
 * @property {Object} [settings]
 */
/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef Custom
 * @property {Object} [props]
 */
/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */
/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */
/**
 * @typedef FontsSchemaItems
 * @property {string} [category]
 * @property {string} [family]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [kind]
 * @property {string} [last_modified]
 * @property {string[]} [subsets]
 * @property {string[]} [variants]
 * @property {string} [version]
 */
/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [bold]
 * @property {string} [italic]
 * @property {string} [regular]
 */
/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */
/**
 * @typedef GlobalSchemaProps
 * @property {string} [category]
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */
/**
 * @typedef Images
 * @property {string[]} [android]
 * @property {string[]} [desktop]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */
/**
 * @typedef Information
 * @property {string} [description]
 * @property {string[]} [features]
 * @property {Images} [images]
 * @property {string} [name]
 */
/**
 * @typedef Light
 * @property {string} [file]
 * @property {string} [name]
 */
/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {string} [name]
 * @property {ConfigPage[]} [page]
 */
/**
 * @typedef Medium
 * @property {string} [file]
 * @property {string} [name]
 */
/**
 * @typedef PaginationSchema
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef Regular
 * @property {string} [file]
 * @property {string} [name]
 */
/**
 * @typedef Sections
 * @property {string} [attributes]
 */
/**
 * @typedef SemiBold
 * @property {string} [file]
 * @property {string} [name]
 */
/**
 * @typedef Src
 * @property {string} [link]
 */
/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef ThemesSchema
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [archived]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Colors} [colors]
 * @property {Config} [config]
 * @property {string} [created_at]
 * @property {boolean} [customized]
 * @property {Font} [font]
 * @property {Information} [information]
 * @property {string} [parent_theme]
 * @property {string} [parent_theme_version]
 * @property {boolean} [published]
 * @property {Src} [src]
 * @property {Object} [styles]
 * @property {string[]} [tags]
 * @property {string} [updated_at]
 * @property {string} [version]
 */
/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef UpgradableThemeSchema
 * @property {string} [applied_theme]
 * @property {string} [parent_theme]
 * @property {boolean} [upgrade]
 */
/**
 * @typedef Variants
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Medium} [medium]
 * @property {Regular} [regular]
 * @property {SemiBold} [semi_bold]
 */
declare class ThemeApplicationModel {
}
declare namespace ThemeApplicationModel {
    export { AddThemeRequestSchema, AllAvailablePageSchema, AssetsSchema, AvailablePagePredicate, AvailablePageRoutePredicate, AvailablePageSchema, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageUserPredicate, availableSectionSchema, BlitzkriegApiErrorSchema, BlitzkriegInternalServerErrorSchema, BlitzkriegNotFoundSchema, Blocks, BlocksProps, Bold, Colors, CommonJs, Config, ConfigPage, Css, Custom, Font, FontsSchema, FontsSchemaItems, FontsSchemaItemsFiles, GlobalSchema, GlobalSchemaProps, Images, Information, Light, ListSchemaItem, Medium, PaginationSchema, Preset, Regular, Sections, SemiBold, Src, ThemesListingResponseSchema, ThemesSchema, UmdJs, UpgradableThemeSchema, Variants };
}
/** @returns {AddThemeRequestSchema} */
declare function AddThemeRequestSchema(): AddThemeRequestSchema;
type AddThemeRequestSchema = {
    theme_id?: string;
};
/** @returns {AllAvailablePageSchema} */
declare function AllAvailablePageSchema(): AllAvailablePageSchema;
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
/** @returns {AssetsSchema} */
declare function AssetsSchema(): AssetsSchema;
type AssetsSchema = {
    common_js?: CommonJs;
    css?: Css;
    umd_js?: UmdJs;
};
/** @returns {AvailablePagePredicate} */
declare function AvailablePagePredicate(): AvailablePagePredicate;
type AvailablePagePredicate = {
    route?: AvailablePageRoutePredicate;
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
};
/** @returns {AvailablePageRoutePredicate} */
declare function AvailablePageRoutePredicate(): AvailablePageRoutePredicate;
type AvailablePageRoutePredicate = {
    exact_url?: string;
    query?: any;
    selected?: string;
};
/** @returns {AvailablePageSchema} */
declare function AvailablePageSchema(): AvailablePageSchema;
type AvailablePageSchema = {
    _id?: string;
    path?: string;
    props?: any[];
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    seo?: AvailablePageSeo;
    text?: string;
    theme?: string;
    type?: string;
    value?: string;
};
/** @returns {AvailablePageSchemaSections} */
declare function AvailablePageSchemaSections(): AvailablePageSchemaSections;
type AvailablePageSchemaSections = {
    blocks?: any[];
    label?: string;
    name?: string;
    predicate?: AvailablePagePredicate;
    preset?: any;
    props?: any;
};
/** @returns {AvailablePageScreenPredicate} */
declare function AvailablePageScreenPredicate(): AvailablePageScreenPredicate;
type AvailablePageScreenPredicate = {
    desktop?: boolean;
    mobile?: boolean;
    tablet?: boolean;
};
/** @returns {AvailablePageSectionMetaAttributes} */
declare function AvailablePageSectionMetaAttributes(): AvailablePageSectionMetaAttributes;
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
/** @returns {AvailablePageSeo} */
declare function AvailablePageSeo(): AvailablePageSeo;
type AvailablePageSeo = {
    _id?: string;
    description?: string;
    title?: string;
};
/** @returns {AvailablePageUserPredicate} */
declare function AvailablePageUserPredicate(): AvailablePageUserPredicate;
type AvailablePageUserPredicate = {
    anonymous?: boolean;
    authenticated?: boolean;
};
/** @returns {availableSectionSchema} */
declare function availableSectionSchema(): availableSectionSchema;
type availableSectionSchema = {
    blocks?: Blocks[];
    label?: string;
    name?: string;
    props?: BlocksProps[];
};
/** @returns {BlitzkriegApiErrorSchema} */
declare function BlitzkriegApiErrorSchema(): BlitzkriegApiErrorSchema;
type BlitzkriegApiErrorSchema = {
    message?: string;
};
/** @returns {BlitzkriegInternalServerErrorSchema} */
declare function BlitzkriegInternalServerErrorSchema(): BlitzkriegInternalServerErrorSchema;
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
/** @returns {BlitzkriegNotFoundSchema} */
declare function BlitzkriegNotFoundSchema(): BlitzkriegNotFoundSchema;
type BlitzkriegNotFoundSchema = {
    message?: string;
};
/** @returns {Blocks} */
declare function Blocks(): Blocks;
type Blocks = {
    name?: string;
    props?: BlocksProps[];
    type?: string;
};
/** @returns {BlocksProps} */
declare function BlocksProps(): BlocksProps;
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
/** @returns {Bold} */
declare function Bold(): Bold;
type Bold = {
    file?: string;
    name?: string;
};
/** @returns {Colors} */
declare function Colors(): Colors;
type Colors = {
    accent_color?: string;
    bg_color?: string;
    button_secondary_color?: string;
    link_color?: string;
    primary_color?: string;
    secondary_color?: string;
};
/** @returns {CommonJs} */
declare function CommonJs(): CommonJs;
type CommonJs = {
    link?: string;
};
/** @returns {Config} */
declare function Config(): Config;
type Config = {
    current?: string;
    global_schema?: GlobalSchema;
    list?: ListSchemaItem[];
    preset?: Preset;
};
/** @returns {ConfigPage} */
declare function ConfigPage(): ConfigPage;
type ConfigPage = {
    page?: string;
    settings?: any;
};
/** @returns {Css} */
declare function Css(): Css;
type Css = {
    link?: string;
    links?: string[];
};
/** @returns {Custom} */
declare function Custom(): Custom;
type Custom = {
    props?: any;
};
/** @returns {Font} */
declare function Font(): Font;
type Font = {
    family?: string;
    variants?: Variants;
};
/** @returns {FontsSchema} */
declare function FontsSchema(): FontsSchema;
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
/** @returns {FontsSchemaItems} */
declare function FontsSchemaItems(): FontsSchemaItems;
type FontsSchemaItems = {
    category?: string;
    family?: string;
    files?: FontsSchemaItemsFiles;
    kind?: string;
    last_modified?: string;
    subsets?: string[];
    variants?: string[];
    version?: string;
};
/** @returns {FontsSchemaItemsFiles} */
declare function FontsSchemaItemsFiles(): FontsSchemaItemsFiles;
type FontsSchemaItemsFiles = {
    bold?: string;
    italic?: string;
    regular?: string;
};
/** @returns {GlobalSchema} */
declare function GlobalSchema(): GlobalSchema;
type GlobalSchema = {
    props?: GlobalSchemaProps[];
};
/** @returns {GlobalSchemaProps} */
declare function GlobalSchemaProps(): GlobalSchemaProps;
type GlobalSchemaProps = {
    category?: string;
    id?: string;
    label?: string;
    type?: string;
};
/** @returns {Images} */
declare function Images(): Images;
type Images = {
    android?: string[];
    desktop?: string[];
    ios?: string[];
    thumbnail?: string[];
};
/** @returns {Information} */
declare function Information(): Information;
type Information = {
    description?: string;
    features?: string[];
    images?: Images;
    name?: string;
};
/** @returns {Light} */
declare function Light(): Light;
type Light = {
    file?: string;
    name?: string;
};
/** @returns {ListSchemaItem} */
declare function ListSchemaItem(): ListSchemaItem;
type ListSchemaItem = {
    global_config?: any;
    name?: string;
    page?: ConfigPage[];
};
/** @returns {Medium} */
declare function Medium(): Medium;
type Medium = {
    file?: string;
    name?: string;
};
/** @returns {PaginationSchema} */
declare function PaginationSchema(): PaginationSchema;
type PaginationSchema = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {Preset} */
declare function Preset(): Preset;
type Preset = {
    pages?: AvailablePageSchema[];
};
/** @returns {Regular} */
declare function Regular(): Regular;
type Regular = {
    file?: string;
    name?: string;
};
/** @returns {Sections} */
declare function Sections(): Sections;
type Sections = {
    attributes?: string;
};
/** @returns {SemiBold} */
declare function SemiBold(): SemiBold;
type SemiBold = {
    file?: string;
    name?: string;
};
/** @returns {Src} */
declare function Src(): Src;
type Src = {
    link?: string;
};
/** @returns {ThemesListingResponseSchema} */
declare function ThemesListingResponseSchema(): ThemesListingResponseSchema;
type ThemesListingResponseSchema = {
    items?: ThemesSchema[];
    page?: PaginationSchema;
};
/** @returns {ThemesSchema} */
declare function ThemesSchema(): ThemesSchema;
type ThemesSchema = {
    __v?: number;
    _id?: string;
    application?: string;
    applied?: boolean;
    archived?: boolean;
    assets?: AssetsSchema;
    available_sections?: availableSectionSchema[];
    colors?: Colors;
    config?: Config;
    created_at?: string;
    customized?: boolean;
    font?: Font;
    information?: Information;
    parent_theme?: string;
    parent_theme_version?: string;
    published?: boolean;
    src?: Src;
    styles?: any;
    tags?: string[];
    updated_at?: string;
    version?: string;
};
/** @returns {UmdJs} */
declare function UmdJs(): UmdJs;
type UmdJs = {
    link?: string;
    links?: string[];
};
/** @returns {UpgradableThemeSchema} */
declare function UpgradableThemeSchema(): UpgradableThemeSchema;
type UpgradableThemeSchema = {
    applied_theme?: string;
    parent_theme?: string;
    upgrade?: boolean;
};
/** @returns {Variants} */
declare function Variants(): Variants;
type Variants = {
    bold?: Bold;
    light?: Light;
    medium?: Medium;
    regular?: Regular;
    semi_bold?: SemiBold;
};
