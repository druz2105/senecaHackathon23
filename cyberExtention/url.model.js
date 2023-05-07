class PhishingWebsiteData {
    constructor(length_url = 0, length_hostname = 0, ip = 0, nb_dots = 0, nb_hyphens = 0, nb_at = 0, nb_qm = 0, nb_and = 0, nb_or = 0, nb_eq = 0, nb_underscore = 0, nb_tilde = 0, nb_percent = 0, nb_slash = 0, nb_star = 0, nb_colon = 0, nb_comma = 0, nb_semicolumn = 0, nb_dollar = 0, nb_space = 0, nb_www = 0, nb_com = 0, nb_dslash = 0, http_in_path = 0, https_token = 0, ratio_digits_url = 0, ratio_digits_host = 0, punycode = 0, port = 0, tld_in_path = 0, tld_in_subdomain = 0, abnormal_subdomain = 0, nb_subdomains = 0, prefix_suffix = 0, random_domain = 0, shortening_service = 0, path_extension = 0, nb_redirection = 0, nb_external_redirection = 0, length_words_raw = 0, char_repeat = 0, shortest_words_raw = 0, shortest_word_host = 0, shortest_word_path = 0, longest_words_raw = 0, longest_word_host = 0, longest_word_path = 0, avg_words_raw = 0, avg_word_host = 0, avg_word_path = 0, phish_hints = 0, domain_in_brand = 0, brand_in_subdomain = 0, brand_in_path = 0, suspecious_tld = false, statistical_report = 0, nb_hyperlinks = 0, ratio_intHyperlinks = 0, ratio_extHyperlinks = 0, ratio_nullHyperlinks = 0, nb_extCSS = 0, ratio_intRedirection = 0, ratio_extRedirection = 0, ratio_intErrors = 0, ratio_extErrors = 0, login_form = false, external_favicon = false, links_in_tags = false, submit_email = 0, ratio_intMedia = 0, ratio_extMedia = 0, sfh = false, iframe = false, popup_window = false, safe_anchor = false, onmouseover = false, right_clic = false, empty_title = false, domain_in_title = false, domain_with_copyright = false, whois_registered_domain = false, domain_registration_length = 0, domain_age = 0, web_traffic = 0, dns_record = false, google_index = false, page_rank = 0) {
        this.length_url = length_url;
        this.length_hostname = length_hostname;
        this.ip = ip;
        this.nb_dots = nb_dots;
        this.nb_hyphens = nb_hyphens;
        this.nb_at = nb_at;
        this.nb_qm = nb_qm;
        this.nb_and = nb_and;
        this.nb_or = nb_or;
        this.nb_eq = nb_eq;
        this.nb_underscore = nb_underscore;
        this.nb_tilde = nb_tilde;
        this.nb_percent = nb_percent;
        this.nb_slash = nb_slash;
        this.nb_star = nb_star;
        this.nb_colon = nb_colon;
        this.nb_comma = nb_comma;
        this.nb_semicolumn = nb_semicolumn;
        this.nb_dollar = nb_dollar;
        this.nb_space = nb_space;
        this.nb_www = nb_www;
        this.nb_com = nb_com;
        this.nb_dslash = nb_dslash;
        this.http_in_path = http_in_path;
        this.https_token = https_token;
        this.ratio_digits_url = ratio_digits_url;
        this.ratio_digits_host = ratio_digits_host;
        this.punycode = punycode;
        this.port = port;
        this.tld_in_path = tld_in_path;
        this.tld_in_subdomain = tld_in_subdomain;
        this.abnormal_subdomain = abnormal_subdomain;
        this.nb_subdomains = nb_subdomains;
        this.prefix_suffix = prefix_suffix;
        this.random_domain = random_domain;
        this.shortening_service = shortening_service;
        this.path_extension = path_extension;
        this.nb_redirection = nb_redirection;
        this.nb_external_redirection = nb_external_redirection;
        this.length_words_raw = length_words_raw;
        this.char_repeat = char_repeat;
        this.shortest_words_raw = shortest_words_raw
        this.shortest_word_host = shortest_word_host;
        this.shortest_word_path = shortest_word_path;
        this.longest_words_raw = longest_words_raw;
        this.longest_word_host = longest_word_host;
        this.longest_word_path = longest_word_path;
        this.avg_words_raw = avg_words_raw;
        this.avg_word_host = avg_word_host;
        this.avg_word_path = avg_word_path;
        this.phish_hints = phish_hints;
        this.domain_in_brand = domain_in_brand;
        this.brand_in_subdomain = brand_in_subdomain;
        this.brand_in_path = brand_in_path;
        this.suspecious_tld = suspecious_tld;
        this.statistical_report = statistical_report;
        this.nb_hyperlinks = nb_hyperlinks;
        this.ratio_intHyperlinks = ratio_intHyperlinks;
        this.ratio_extHyperlinks = ratio_extHyperlinks;
        this.ratio_nullHyperlinks = ratio_nullHyperlinks;
        this.nb_extCSS = nb_extCSS;
        this.ratio_intRedirection = ratio_intRedirection;
        this.ratio_extRedirection = ratio_extRedirection;
        this.ratio_intErrors = ratio_intErrors;
        this.ratio_extErrors = ratio_extErrors;
        this.login_form = login_form;
        this.external_favicon = external_favicon;
        this.links_in_tags = links_in_tags;
        this.submit_email = submit_email;
        this.ratio_intMedia = ratio_intMedia;
        this.ratio_extMedia = ratio_extMedia;
        this.sfh = sfh;
        this.iframe = iframe;
        this.popup_window = popup_window;
        this.safe_anchor = safe_anchor;
        this.onmouseover = onmouseover;
        this.right_clic = right_clic;
        this.empty_title = empty_title;
        this.domain_in_title = domain_in_title;
        this.domain_with_copyright = domain_with_copyright;
        this.whois_registered_domain = whois_registered_domain;
        this.domain_registration_length = domain_registration_length;
        this.domain_age = domain_age;
        this.web_traffic = web_traffic;
        this.dns_record = dns_record;
        this.google_index = google_index;
        this.page_rank = page_rank;
    }

    toJson() {
        return {
            length_url: this.length_url,
            length_hostname: this.length_hostname,
            ip: this.ip,
            nb_dots: this.nb_dots,
            nb_hyphens: this.nb_hyphens,
            nb_at: this.nb_at,
            nb_qm: this.nb_qm,
            nb_and: this.nb_and,
            nb_or: this.nb_or,
            nb_eq: this.nb_eq,
            nb_underscore: this.nb_underscore,
            nb_tilde: this.nb_tilde,
            nb_percent: this.nb_percent,
            nb_slash: this.nb_slash,
            nb_star: this.nb_star,
            nb_colon: this.nb_colon,
            nb_comma: this.nb_comma,
            nb_semicolumn: this.nb_semicolumn,
            nb_dollar: this.nb_dollar,
            nb_space: this.nb_space,
            nb_www: this.nb_www,
            nb_com: this.nb_com,
            nb_dslash: this.nb_dslash,
            http_in_path: this.http_in_path,
            https_token: this.https_token,
            ratio_digits_url: this.ratio_digits_url,
            ratio_digits_host: this.ratio_digits_host,
            punycode: this.punycode,
            port: this.port,
            tld_in_path: this.tld_in_path,
            tld_in_subdomain: this.tld_in_subdomain,
            abnormal_subdomain: this.abnormal_subdomain,
            nb_subdomains: this.nb_subdomains,
            prefix_suffix: this.prefix_suffix,
            random_domain: this.random_domain,
            shortening_service: this.shortening_service,
            path_extension: this.path_extension,
            nb_redirection: this.nb_redirection,
            nb_external_redirection: this.nb_external_redirection,
            length_words_raw: this.length_words_raw,
            char_repeat: this.char_repeat,
            shortest_words_raw: this.shortest_words_raw,
            shortest_word_host: this.shortest_word_host,
            shortest_word_path: this.shortest_word_path,
            longest_words_raw: this.longest_words_raw,
            longest_word_host: this.longest_word_host,
            longest_word_path: this.longest_word_path,
            avg_words_raw: this.avg_words_raw,
            avg_word_host: this.avg_word_host,
            avg_word_path: this.avg_word_path,
            phish_hints: this.phish_hints,
            domain_in_brand: this.domain_in_brand,
            brand_in_subdomain: this.brand_in_subdomain,
            brand_in_path: this.brand_in_path,
            suspecious_tld: this.suspecious_tld,
            statistical_report: this.statistical_report,
            nb_hyperlinks: this.nb_hyperlinks,
            ratio_intHyperlinks: this.ratio_intHyperlinks,
            ratio_extHyperlinks: this.ratio_extHyperlinks,
            ratio_nullHyperlinks: this.ratio_nullHyperlinks,
            nb_extCSS: this.nb_extCSS,
            ratio_intRedirection: this.ratio_intRedirection,
            ratio_extRedirection: this.ratio_extRedirection,
            ratio_intErrors: this.ratio_intErrors,
            ratio_extErrors: this.ratio_extErrors,
            login_form: this.login_form,
            external_favicon: this.external_favicon,
            links_in_tags: this.links_in_tags,
            submit_email: this.submit_email,
            ratio_intMedia: this.ratio_intMedia,
            ratio_extMedia: this.ratio_extMedia,
            sfh: this.sfh,
            iframe: this.iframe,
            popup_window: this.popup_window,
            safe_anchor: this.safe_anchor,
            onmouseover: this.onmouseover,
            right_clic: this.right_clic,
            empty_title: this.empty_title,
            domain_in_title: this.domain_in_title,
            domain_with_copyright: this.domain_with_copyright,
            whois_registered_domain: this.whois_registered_domain,
            domain_registration_length: this.domain_registration_length,
            domain_age: this.domain_age,
            web_traffic: this.web_traffic,
            dns_record: this.dns_record,
            google_index: this.google_index,
            page_rank: this.page_rank,
        }
    }
}



module.exports = {PhishingWebsiteData}