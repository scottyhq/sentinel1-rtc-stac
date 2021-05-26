(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["metadata-sidebar"],{1041:function(e,t,r){},"197d":function(e){e.exports=JSON.parse('{"extensions":{"card4l":{"label":"CARD4L","explain":"CEOS Analysis Ready Data for Land"},"cube":"Data Cube","eo":"Electro-Optical","file":"File","label":"Labels / ML","pc":"Point Cloud","processing":"Processing","proj":"Projection","sar":{"label":"SAR","explain":"Synthetic Aperture Radar"},"sat":"Satellite","sci":"Scientific","tiles":"Tiled Assets","view":"View Geometry","gee":"Google Earth Engine","landsat":"Landsat","pl":"Planet Labs Inc.","sentinel":"Copernicus Sentinel","cbers":{"label":"CBERS","explain":"China-Brazil Earth Resources Satellite Program"},"geoadmin":{"label":"swisstopo","explain":"Federal Office of Topography (Switzerland)"}},"links":{"href":{"label":"URL","format":"Url"},"rel":{"label":"Relation","explain":"based on IANA relation types","mapping":{"self":"This document","root":"Root STAC Catalog","parent":"Parent STAC Catalog","collection":"STAC Collection","derived_from":"STAC Item for input data","alternate":"Alternative representation","via":"Source metadata","next":"Next page","prev":"Previous page","canonical":"Origin of this document"}},"type":{"label":"File Format","explain":"based on the IANA media (MIME) types","format":"MediaType"}},"assets":{"href":{"label":"URL","format":"Url"},"type":{"label":"File Format","explain":"based on the IANA media (MIME) types","format":"MediaType"},"roles":{"label":"Purpose","mapping":{"thumbnail":"Preview","overview":"Overview","visual":"Visualization","data":"Data","metadata":"Metadata","graphic":"Illustration"}}},"metadata":{"datetime":{"label":"Acquired","format":"Timestamp","summary":false},"title":{"label":"Title","summary":false},"description":{"label":"Description","format":"CommonMark","summary":false},"start_datetime":{"label":"First Acquisition","format":"Timestamp","summary":false},"end_datetime":{"label":"Last Acquisition","format":"Timestamp","summary":false},"created":{"label":"Created","format":"Timestamp","summary":"r"},"updated":{"label":"Updated","format":"Timestamp","summary":"r"},"published":{"label":"Published","format":"Timestamp","summary":"r"},"expires":{"label":"Expires","format":"Timestamp","summary":"r"},"unpublished":{"label":"Unpublished","format":"Timestamp","summary":"r"},"license":{"label":"License","format":"License","summary":false},"providers":{"label":"Providers","format":"Providers","summary":false},"platform":"Platform","instruments":{"label":"Instruments","format":"CSV"},"constellation":"Constellation","mission":"Mission","gsd":{"label":"GSD","explain":"Ground Sample Distance","unit":"m"},"version":{"label":"Version","summary":false},"deprecated":{"label":"Deprecated","summary":false},"cube:dimensions":{"label":"Dimensions","summary":false,"listWithKeys":true,"items":{"type":{"label":"Type","order":0},"axis":{"label":"Axis","order":1},"description":{"label":"Description","format":"CommonMark","order":2},"extent":{"label":"Extent","format":"Extent","order":3},"values":{"label":"Values","order":4},"step":{"label":"Step","order":5},"reference_system":{"label":"Ref. Sys.","explain":"Coordinate / Temporal / Other Reference System","order":6}}},"eo:bands":{"label":"Spectral Bands","items":{"name":{"label":"Name","sortable":true,"id":true,"order":0},"common_name":{"label":"Common Name","sortable":true,"order":1},"description":{"label":"Description","format":"CommonMark","order":2},"center_wavelength":{"label":"Wavelength","explain":"Center Wavelength","unit":"μm","sortable":true,"order":5},"full_width_half_max":{"label":"FWHM","explain":"Full Width Half Max","unit":"μm","sortable":true,"order":6},"gsd":{"alias":"gsd","sortable":true,"order":3},"cloud_cover":{"alias":"eo:cloud_cover","sortable":true,"order":4}}},"eo:cloud_cover":{"label":"Cloud Cover","unit":"%"},"file:bits_per_sample":"Bits per Sample","file:byte_order":"Byte Order","file:checksum":{"label":"Checksum","format":"Checksum","custom":true,"summary":false},"file:data_type":{"label":"Data Type of Values","format":"FileDataType"},"file:header_size":{"label":"Header Size","format":"FileSize","summary":false},"file:nodata":{"label":"No-data Values","format":"CSV","summary":false},"file:size":{"label":"Size","format":"FileSize","summary":false},"file:unit":"Unit of Values","file:values":{"label":"Map of Values","summary":false,"items":{"values":{"label":"Value(s)","format":"CSV","order":1},"summary":{"label":"Summary","order":0}}},"label:properties":{"label":"Properties","null":"raster data"},"label:classes":{"label":"Classes","items":{"name":{"label":"Name","null":"raster-formatted","sortable":true,"id":true},"classes":"Classes"}},"label:description":{"label":"Description","format":"CommonMark","summary":false},"label:type":"Type","label:tasks":"Tasks","label:methods":"Methods","label:overviews":{"label":"Overviews","summary":false,"items":{"property_key":{"label":"Property Key","id":true},"counts":{"label":"Counts","custom":true},"statistics":{"label":"Statistics","custom":true}}},"pc:count":{"label":"Points","explain":"Number of Points"},"pc:type":"Type","pc:encoding":"Format","pc:schemas":{"label":"Schemas","summary":false,"items":{"name":{"label":"Name","sortable":true,"id":true},"size":{"label":"Size","unit":"bytes","sortable":true},"type":{"label":"Type","sortable":true}}},"pc:density":"Density","pc:statistics":{"label":"Statistics","summary":"s","items":{"name":{"label":"Name","id":true},"position":"Position","average":"Average","count":"Count","maximum":"Max.","minimum":"Min.","stddev":{"label":"Std. Dev.","explain":"Standard Deviation"},"variance":"Variance"}},"processing:lineage":{"label":"Lineage","format":"CommonMark","summary":false},"processing:level":"Level","processing:facility":"Facility","processing:software":{"label":"Software","format":"Software","summary":false},"proj:epsg":{"label":"EPSG Code","format":"EPSG","summary":"v"},"proj:wkt2":{"label":"WKT2","explain":"Well-Known Text, version 2","format":"WKT2","summary":false},"proj:projjson":{"label":"PROJJSON","custom":true,"summary":false},"proj:geometry":{"label":"Footprint","custom":true,"summary":false},"proj:bbox":{"label":"Bounding Box","custom":true,"summary":false},"proj:centroid":{"label":"Centroid","custom":true,"summary":false},"proj:shape":{"label":"Shape","custom":true,"summary":false},"proj:transform":{"label":"Transform","custom":true,"summary":false},"sar:instrument_mode":"Instrument Mode","sar:frequency_band":"Frequency Band","sar:center_frequency":{"label":"Center Frequency","unit":"GHz"},"sar:polarizations":{"label":"Polarizations","format":"CSV"},"sar:product_type":"Product Type","sar:resolution_range":{"label":"Range Resolution","unit":"m"},"sar:resolution_azimuth":{"label":"Azimuth Resolution","unit":"m"},"sar:pixel_spacing_range":{"label":"Range Pixel Spacing","unit":"m"},"sar:pixel_spacing_azimuth":{"label":"Aziumth Pixel Spacing","unit":"m"},"sar:looks_range":"Range Looks","sar:looks_azimuth":"Azimuth Looks","sar:looks_equivalent_number":{"label":"ENL","explain":"Equivalent Number of Looks"},"sar:observation_direction":"Observation Direction","sat:platform_international_designator":{"label":"Int. Designator","explain":"International Designator for the platform, also known as COSPAR ID and NSSDCA ID."},"sat:orbit_state":"Orbit State","sat:absolute_orbit":{"label":"Abs. Orbit Number","explain":"Absolute Orbit Number"},"sat:relative_orbit":{"label":"Rel. Orbit Number","explain":"Relative Orbit Number"},"sat:anx_datetime":{"label":"ANX time","explain":"Ascending Node Crossing time","summary":"r"},"sci:doi":{"label":"DOI","format":"DOI"},"sci:citation":{"label":"Citation","summary":"s"},"sci:publications":{"label":"Publications","summary":false,"items":{"citation":{"label":"Publication","sortable":true,"order":0},"doi":{"label":"DOI","format":"DOI","sortable":true,"order":1}}},"tiles:tile_matrix_sets":{"label":"Tile Matrix Sets","custom":true,"summary":false},"tiles:tile_matrix_set_links":{"label":"Tile Matrix Set Links","custom":true,"summary":false},"view:off_nadir":{"label":"Off-Nadir Angle","unit":"º"},"view:incidence_angle":{"label":"Incidence Angle","unit":"º"},"view:azimuth":{"label":"Viewing Azimuth","unit":"º"},"view:sun_azimuth":{"label":"Sun Azimuth","unit":"º"},"view:sun_elevation":{"label":"Sun Elevation","unit":"º"},"pl:ground_control":"Ground Control","pl:item_type":"Source Type","pl:quality_category":"Quality Category","pl:strip_id":"Strip ID","gee:type":"Type","gee:cadence":"Cadence","gee:schema":{"label":"Variables","listWithKeys":true,"items":{"description":"Description","type":"Data Type"},"summary":false},"gee:terms_of_use":{"label":"Terms of Use","format":"CommonMark","summary":false},"gee:visualizations":{"label":"Visualizations","custom":true,"summary":false},"landsat:scene_id":"Scene ID","landsat:collection_category":"Collection Category","landsat:collection_number":"Collection Number","landsat:wrs_type":{"label":"WRS Type","explain":"Worldwide Reference System Type"},"landsat:wrs_path":{"label":"WRS Path","explain":"Worldwide Reference System Path"},"landsat:wrs_row":{"label":"WRS Row","explain":"Worldwide Reference System Row"},"landsat:cloud_cover_land":{"label":"Land Cloud Cover","unit":"%"},"sentinel:utm_zone":"UTM zone","sentinel:latitude_band":"Latitude band","sentinel:grid_square":"Grid square","sentinel:sequence":"Sequence","sentinel:product_id":{"label":"Product ID","summary":"s"},"sentinel:data_coverage":{"label":"Data Coverage","unit":"%"},"sentinel:valid_cloud_cover":"Valid Cloud Cover","cbers:data_type":"Data type","cbers:path":"Path","cbers:row":"Row","card4l:specification":{"label":"Specification","mapping":{"sr":"Surface Reflectance (Optical)","st":"Surface Temperature (Optical)","nrb":"Normalized Radar Backscatter (SAR)","pol":"Polarimetric Radar (SAR)"}},"card4l:specification_version":"Specification Version","card4l:orbit_mean_altitude":{"label":"Platform altitude","unit":"m"},"card4l:incidence_angle_near_range":{"label":"Incidence Angle (near)","unit":"º"},"card4l:incidence_angle_far_range":{"label":"Incidence Angle (far)","unit":"º"},"card4l:noise_equivalent_intensity":{"label":"Noise Equivalent Intensity","unit":"dB"},"card4l:mean_faraday_rotation_angle":{"label":"Mean Faraday Rotation","unit":"º"},"card4l:speckle_filtering":{"label":"Speckle Filtering","custom":true,"summary":false,"null":"not applied"},"card4l:relative_rtc_accuracy":{"label":"Rel. RTC Accuracy","explain":"Relative accuracy of the Radiometric Terrain Correction","unit":"dB"},"card4l:absolute_rtc_accuracy":{"label":"Abs. RTC Accuracy","explain":"Absolute accuracy of the Radiometric Terrain Correction","unit":"dB"},"card4l:northern_geometric_accuracy":{"label":"Northern Geometric Accuracy","unit":"m"},"card4l:eastern_geometric_accuracy":{"label":"Eastern Geometric Accuracy","unit":"m"},"card4l:ellipsoidal_height":{"label":"Ellipsoidal Height","unit":"m"},"card4l:processing_chain":{"label":"Processing","custom":true,"summary":false},"geoadmin:variant":{"label":"Product Variant","mapping":{"krel":"RGB color with relief","komb":"RGB color without relief","kgrel":"Grayscale with relief","kgrs":"Grayscale without relief"}}}}')},"53ca":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}},"5b84":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-responsive metadata"},[r("table",{staticClass:"table"},[r("tbody",[e._m(0),e.stacVersion?r("tr",[r("td",{staticClass:"title"},[e._v("STAC Version")]),r("td",[e._v(e._s(e.stacVersion))])]):e._e(),e.keywords.length>0?r("tr",[r("td",{staticClass:"title"},[e._v("Keywords")]),r("td",[e._v(e._s(e.keywords.join(", ")))])]):e._e(),e.collectionLink?r("tr",[r("td",{staticClass:"title"},[e._v("Collection")]),r("td",[r("router-link",{attrs:{to:e.linkToCollection}},[e._v(" "+e._s(e.collectionTitle)+" ")])],1)]):e._e(),e.license?r("tr",[r("td",{staticClass:"title"},[e._v("License")]),r("td",{domProps:{innerHTML:e._s(e.license)}})]):e._e(),e.temporalExtentReadable.length>0?r("tr",[r("td",{staticClass:"title"},[e._v("Temporal Extent")]),r("td",[e._v(e._s(e.temporalExtentReadable))])]):e._e(),e._l(e.propertyList,(function(t){return[t.extension?r("tr",{key:t.extension},[r("td",{staticClass:"group",attrs:{colspan:"2"}},[r("h4",{domProps:{innerHTML:e._s(t.label)}})])]):e._e(),e._l(t.properties,(function(t,a){return r("tr",{key:a},[r("td",{staticClass:"title",attrs:{title:a},domProps:{innerHTML:e._s(t.label)}}),r("td",{domProps:{innerHTML:e._s(t.formatted)}})])}))]})),Array.isArray(e.providers)&&e.providers.length>0?[r("tr",[r("td",{staticClass:"group",attrs:{colspan:"2"}},[r("h4",[1===e.providers.length?[e._v(" Provider ")]:e._e(),1!==e.providers.length?[e._v(" Providers ")]:e._e()],2)])]),r("tr",[r("td",{staticClass:"provider",attrs:{colspan:"2"},domProps:{innerHTML:e._s(e.providerHtml)}})])]:e._e(),e.hasSummary?[e._m(1),e._l(e.summariesList,(function(t){return[t.extension?r("tr",{key:t.extension},[r("td",{staticClass:"group",attrs:{colspan:"2"}},[r("h4",{domProps:{innerHTML:e._s(t.label)}})])]):e._e(),e._l(t.properties,(function(t,a){return r("tr",{key:a},[r("td",{staticClass:"title summary-title",attrs:{title:a},domProps:{innerHTML:e._s(t.label)}}),r("td",{domProps:{innerHTML:e._s(t.formatted)}})])}))]}))]:e._e()],2)])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",{staticClass:"group",attrs:{colspan:"2"}},[r("h4",[e._v("Metadata")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",{staticClass:"group summary",attrs:{colspan:"2"}},[r("h4",[e._v("Item Summary")])])])}],l=r("53ca"),n=(r("b64b"),r("fb6a"),r("a15b"),r("d81d"),r("6057")),s=r.n(n),o={name:"MetadataSidebar",props:{properties:{type:Object,default:function(){return{}}},summaries:{type:Object,default:function(){return{}}},stacVersion:{type:String},keywords:{type:Array,default:function(){return[]}},collection:{type:Object,default:function(){return{}}},collectionLink:{},license:{},temporalExtent:{},providers:{},slugify:{}},computed:{linkToCollection:function(){return null!=this.collectionLink.href?"/collection/".concat(this.slugify(this.collectionLink.href)):null},collectionTitle:function(){return this.collection&&this.collection.title?this.collection.title:"Untitled"},hasSummary:function(){return this.summaries&&"object"===Object(l["a"])(this.summaries)&&Object.keys(this.summaries).length>0},providerHtml:function(){return s.a.Formatters.formatProviders(this.providers)},summariesList:function(){return s.a.formatSummaries({summaries:this.summaries},this.ignore,"")},propertyList:function(){return s.a.formatItemProperties({properties:this.properties},this.ignore,"")},temporalExtentReadable:function(){return Array.isArray(this.temporalExtent)?(e=this.temporalExtent.length>1?this.temporalExtent.slice(1):this.temporalExtent,e.map(this.formatTemporalInterval).join(", ")):"";var e}},methods:{formatTemporalInterval:function(e){return[e[0]?new Date(e[0]).toLocaleString():"beginning of time",e[1]?new Date(e[1]).toLocaleString():"now"].join(" - ")},ignore:function(e){switch(e){case"eo:bands":case"providers":return!1;default:return!0}}}},m=o,u=(r("71e3"),r("c2b6"),r("2877")),c=Object(u["a"])(m,a,i,!1,null,"75a35af8",null);t["default"]=c.exports},6057:function(e,t,r){var a={externalRenderer:!1,addExtension(e,t){b.extensions[e]=i.normalizeField(t,b.extensions)},addMetadataField(e,t){b.metadata[e]=i.normalizeField(t,b.metadata)},addLinkField(e,t){b.links[e]=i.normalizeField(t,b.links)},addAssetField(e,t){b.assets[e]=i.normalizeField(t,b.assets)},addMetadataFields(e){for(var t in e)a.addMetadataField(t,e[t])},getSpecification(e,t=null){let r={};return"assets"===t&&b.assets[e]?r=b.assets[e]:"links"===t&&b.links[e]?r=b.links[e]:b.metadata[e]&&(r=b.metadata[e]),r}},i={e(e){return"string"!==typeof e&&(e=String(e)),e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},toList(e,t=!1,r=null){let a=e,i="ol";return t&&(a=a.slice(0).sort(),i="ul"),"function"===typeof r&&(a=a.map(r)),0===a.length?l.null():1===a.length?a[0]:`<${i}><li>${a.join("</li><li>")}</li></${i}>`},toLink(e,t="",r="",a="_blank"){return t||(t=e.length>50?e.replace(/^\w+:\/\/([^\/]+)((\/[^\/\?]+)*\/([^\/\?]+)(\?.*)?)?$/gi,(function(...e){return e[4]?e[1]+"​/[…]/​"+e[4]:e[1]})):e.replace(/^\w+:\/\//i,"")),`<a href="${i.e(e)}" rel="${i.e(r)}" target="${i.e(a)}">${i.e(t)}</a>`},toObject(e,t=null){let r="<dl>";for(let a in e){let l=i.formatKey(a,!0),n=e[a];"function"===typeof t&&(n=t(n,a,e)),r+=`<dt>${l}</dt><dd>${n}</dd>`}return r+="</dl>",r},isObject(e){return"object"===typeof e&&e===Object(e)&&!Array.isArray(e)},formatKey(e,t=!1){return!1===t&&(e=e.replace(/^\w+:/i,"")),i.e(e).split(/[:_\-\s]/g).map(e=>e.substr(0,1).toUpperCase()+e.substr(1)).join(" ")},normalizeFields(e){let t=["extensions","metadata","links","assets"];for(let r of t)for(let t in e[r])e[r][t]=i.normalizeField(e[r][t],e[r]);return e},normalizeField(e,t={}){if("string"===typeof e)return{label:e};if("string"===typeof e.alias)return Object.assign(e,i.normalizeField(t[e.alias],t));if("string"===typeof e.format&&(e.formatter=n["format"+e.format]),i.isObject(e.items)){let r=[];for(let a in e.items)e.items[a]=i.normalizeField(e.items[a],t),r.push(Object.assign({key:a},e.items[a]));e.itemOrder=r.sort((e,t)=>!0===e.id?-1:!0===t.id?1:"number"===typeof e.order&&"number"===typeof t.order?e.order-t.order:e.label.localeCompare(t.label)).map(e=>e.key)}return e},hexToUint8(e){if(0===e.length||e.length%2!==0)throw new Error(`The string "${e}" is not valid hex.`);return new Uint8Array(e.match(/.{1,2}/g).map(e=>parseInt(e,16)))},uint8ToHex(e){return e.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),"")},keysFromListOfObjects(e){return e.reduce((e,t)=>Object.keys(t).reduce((e,t)=>(-1==e.indexOf(t)&&e.push(t),e),e),[])},unit(e,t=""){return"string"===typeof t&&t.length>0?`${e}&nbsp;<span class="unit">${t}</unit>`:e}},l={array(e,t=!1,r=""){return i.toList(e,t,e=>l.format(e,r))},object(e){return i.toObject(e,e=>l.format(e))},null(e="n/a"){return`<i class="null">${e}</i>`},number(e,t=""){return"number"!==typeof e&&(e=parseFloat(e)),i.unit(e.toLocaleString(),t)},string(e,t=""){return i.unit(i.e(e).replace(/(\r\n|\r|\n){2,}/g,"<br />"),t)},boolean(e){return e?"✔️":"❌"},format(e,t=""){return"boolean"===typeof e?l.boolean(e):"number"===typeof e?l.number(e,t):"string"===typeof e?l.string(e,t):Array.isArray(e)?l.array(e,t):i.isObject(e)?l.object(e):l.null()}},n={formatUrl(e,t,r,a=null,l=null){let n=i.isObject(l)&&"string"===typeof l?l.title:e;return i.toLink(e,n,l.rel||"")},formatMediaType(e){if("string"!==typeof e)return l.null("Unknown");switch(e.toLowerCase()){case"image/tiff; application=geotiff":return"GeoTIFF image";case"image/tiff; application=geotiff; profile=cloud-optimized":return"Cloud-optimized GeoTIFF image";case"image/jp2":return"JPEG 2000 image";case"image/png":case"image/apng":return"PNG image";case"image/gif":return"GIF image";case"image/jpeg":case"image/jpg":return"JPEG image";case"image/webp":return"WebP image";case"image/svg+xml":return"SVG vector image";case"text/xml":case"application/xml":return"XML";case"text/json":case"application/json":return"JSON";case"application/geo+json":return"GeoJSON";case"text/html":return"HTML (Website)";case"text/plain":return"Text document";case"application/pdf":return"PDF document";case"application/octet-stream":return"Binary file";default:let t=e.toLowerCase().match(/^(\w+)\/([\w-\+]+)$/);if(Array.isArray(t)&&t.length>=2){let e=i.formatKey(t[2]);switch(t[1]){case"image":return e+" image";case"audio":return e+" audio";case"model":return e+" 3D model";case"video":return e+" video";case"text":case"application":return e}}return i.e(e)}},formatTimestamp(e){if("string"===typeof e)try{return new Date(e).toLocaleString([],{timeZone:"UTC",timeZoneName:"short"})}catch(t){}return l.null()},formatLicense(e,t,r,a=null){if("string"!==typeof e||0===e.length)return l.null();if("proprietary"!==e&&"various"!==e&&e.match(/^[\w\.\-]+$/i))return i.toLink(`https://spdx.org/licenses/${e}.html`,e,"license");let n=Array.isArray(a.links)?a.links.filter(e=>i.isObject(e)&&"string"===typeof e.href&&"license"===e.rel):[];return i.toList(n,!1,t=>i.toLink(t.href,t.title||e,"license"))},formatProviders(e){return i.toList(e,!1,e=>{let t=e.name,r="",a="";return"string"===typeof e.url&&e.url.length>0&&(t=i.toLink(e.url,t)),Array.isArray(e.roles)&&e.roles.length>0&&(r=e.roles.map(e=>i.e(e)).join(", "),r=` (<em>${r}</em>)`),"string"===typeof e.description&&e.description.length>0&&(a=n.formatCommonMark(e.description)),`${t}${r}${a}`})},formatCommonMark(e){if("string"!==typeof e||0===e.length)return l.null();const t=r("e7d1");let a=new t.Parser,i=new t.HtmlRenderer({safe:!0,smart:!0}),n=i.render(a.parse(e));return`<div class="description">${n}</div>`},formatSoftware(e){if(!i.isObject(e))return l.null();let t=[];for(let r in e){let a=e[r];"string"===typeof a&&a.length>0||"number"===typeof a?t.push(`${r} (${a})`):t.push(r)}return i.toList(t,!0)},formatDOI(e){return e=i.e(e),i.toLink("http://doi.org/"+e,e)},formatEPSG(e){return"string"===typeof e&&(e=e.replace(/^epsg:/i,"")),e=parseInt(e,10),e>0?i.toLink("http://epsg.io/"+e,e):l.null()},formatExtent(e,t=""){return!Array.isArray(e)||e.length<2||null===e[0]&&null===e[1]?l.null():null===e[0]?"Until "+l.format(e[1],t):null===e[1]?"From "+l.format(e[0],t):e[0]===e[1]?l.format(e[0],t):e.map(e=>l.format(e,t)).join(" – ")},formatTemporalExtent(e){return!Array.isArray(e)||e.length<2||"string"!==typeof e[0]&&"string"!==typeof e[1]?l.null():"string"!==typeof e[0]?"Until "+n.formatTimestamp(e[1]):"string"!==typeof e[1]?n.formatTimestamp(e[0])+" until present":e[0]===e[1]?n.formatTimestamp(e[0]):e.map(e=>n.formatTimestamp(e)).join(" - ")},formatWKT2(e){if("string"!==typeof e)return l.null();let t,r=-1;try{t=e.replace(/([A-Z]+)\[|\]/g,(e,t)=>{if("]"===e)return r--,e;{r++;let e="  ".repeat(r);return`\n${e}${t}[`}})}catch(a){t=e}return`<pre>${t}</pre>`},fileSizeUnits:["B","kB","MB","GB","TB"],formatFileSize(e){if("number"!==typeof e)return i.e(e);var t=0==e?0:Math.floor(Math.log(e)/Math.log(1024));return i.unit(1*(e/Math.pow(1024,t)).toFixed(2),n.fileSizeUnits[t])},formatChecksum(e){if("string"!==typeof e)return l.null();try{const t=r("354e"),a=t.decode(i.hexToUint8(e)),l=i.e(a.name),n=i.e(i.uint8ToHex(a.digest));return`<input class="checksum-input" size="32" value="${n}" readonly /><br />Hashing algorithm: <strong>${l}</strong>`}catch(t){return l.null()}},fileDataTypes:{int8:"8-bit integer",int16:"16-bit integer",int32:"32-bit integer",int64:"64-bit integer",uint8:"unsigned 8-bit integer",uint16:"unsigned 16-bit integer",uint32:"unsigned 32-bit integer",uint64:"unsigned 64-bit integer",float16:"16-bit float",float32:"32-bit float",float64:"64-big float",cint16:"16-bit complex integer",cint32:"32-bit complex integer",cfloat32:"32-bit complex float",cfloat64:"64-bit complex float",other:"Other"},formatFileDataType(e){return"string"===typeof e&&e in n.fileDataTypes?`<abbr title="${n.fileDataTypes[e]}">${e}</abbr>`:l.null()},formatCSV(e){if(Array.isArray(e)){let t=void 0!==e.find(e=>"number"===typeof e);return e.map(i.e).join(t?"; ":", ")}return i.e(e)}};function s(e,t,r,s,o){let m={};for(let c in t){let b;try{let u=c.split(":",2);1===u.length&&u.unshift(o);let y=u[0];if("function"===typeof s&&!s(c))continue;i.isObject(m[y])||(m[y]={extension:y,label:f(y),properties:{}}),b=t[c];let g=a.getSpecification(c,r),h=!1;"summaries"===r&&g.listWithKeys&&Array.isArray(b)&&b.length>0&&(b=b[0],h=!0);let _,v=null,x=[];if(i.isObject(g.items)){let e,t=b;g.listWithKeys&&(t=Object.values(t)),Array.isArray(t)?e=i.keysFromListOfObjects(t):i.isObject(t)&&(e=Object.keys(t)),v={},x=g.itemOrder.filter(t=>e.includes(t)),e.forEach(e=>{"undefined"===typeof g.items[e]?(v[e]={label:i.formatKey(e),explain:e},x.push(e)):(v[e]=g.items[e],v[e].label=d(e,g.items[e]))})}if("summaries"===r)if(!h&&i.isObject(b))_="undefined"!==typeof b.minimum&&"undefined"!==typeof b.minimum?n.formatExtent([b.minimum,b.maximum],g.unit):l.object(b);else if(a.externalRenderer&&v){let r=h?Object.assign({},b):b.slice(0);for(let a in r){let l=i.isObject(r[a])?{}:[];for(let i in v)l[i]=p(r[a][i],i,e,t,v[i]);r[a]=l}}else Array.isArray(b)?_=i.toList(b,!g.custom&&!g.items,r=>p(r,c,e,t,g)):console.warn("Invalid summary value: "+b);"undefined"===typeof _&&(_=p(b,c,e,t,g)),m[y].properties[c]={label:d(c,g),value:b,formatted:_,items:v,itemOrder:x,spec:g}}catch(u){console.error(`Field '${c}' with value '${b}' resulted in an error`,u)}}return Object.values(m).sort((e,t)=>e.extension.localeCompare(t.extension))}function o(e,t,r=null,a=""){let i={};for(let l in e)i[l]=s(t,e[l],"assets",r,a);return i}function m(e,t,r=null,a=""){let i=[];for(let l of e)i.push(s(t,l,"links",r,a));return i}function u(e,t=null,r=""){return s(e,e.summaries,"summaries",t,r)}function c(e,t=null,r=""){return s(e,e.properties,"metadata",t,r)}function p(e,t,r=null,n=null,s=null){if(i.isObject(s)||(s=b.metadata[t]||{}),"function"===typeof s.formatter)return s.formatter(e,t,s,r,n);if(i.isObject(s.mapping)){let t=String(e).toLowerCase();return"undefined"!==typeof s.mapping[t]&&(e=s.mapping[t]),l.format(e,s.unit)}if(null===e&&s.null)return l.null(s.null);if(Array.isArray(e)){let l=e=>p(e,t,r,n,s);return a.externalRenderer&&(s.custom||s.items)?e.map(l):i.toList(e,!1,l)}if(i.isObject(e)&&i.isObject(s.items)){let t=(e,t,a)=>p(e,t,r,a,s.listWithKeys?Object.assign({},s,{listWithKeys:!1}):s.items[t]);if(a.externalRenderer&&(s.custom||s.items)){let r={};for(let a in e)r[a]=t(e[a],a,e);return r}return i.toObject(e,t)}return l.format(e,s.unit)}function d(e,t=null){if(i.isObject(t)||(t=b.metadata[e]||{}),i.isObject(t)&&"string"===typeof t.label){if("string"===typeof t.explain)return`<abbr title="${i.e(t.explain)}">${t.label}</abbr>`;if("string"===typeof t.label)return t.label}return i.formatKey(e)}function f(e){return d(e,b.extensions[e])}var b=i.normalizeFields(r("197d"));e.exports={format:p,label:d,extension:f,formatSummaries:u,formatItemProperties:c,formatAssets:o,formatLinks:m,Fields:b,Registry:a,Helper:i,DataTypes:l,Formatters:n}},"71e3":function(e,t,r){"use strict";r("735c")},"735c":function(e,t,r){},c2b6:function(e,t,r){"use strict";r("1041")}}]);
//# sourceMappingURL=metadata-sidebar.12a7910f.js.map