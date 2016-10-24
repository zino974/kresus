'use strict';

module.exports = {

    client: {

        KRESUS: 'KRESUS',
        about: 'Kresus is a personal finance manager that allows you to have a better understanding of what your main expenses are, by computing useful statistics about your bank transactions.',

        accountwizard: {
            title: 'Welcome!',
            content: 'Kresus is a personal finance manager that allows you to have a better understanding of what your main expenses are, by computing useful statistics about your bank transactions. To start, please set up a bank account below:',
            import_title: 'Import',
            import: 'If you have exported your previous Kresus instance, you can also import it back now by selecting the JSON file created on export.',
            advanced: 'Advanced options'
        },

        amount_well: {
            current_search: 'For this search',
            this_month: 'This month'
        },

        category: {
            none: 'No category',
            add: 'add a category',
            column_category_color: 'COLOR',
            column_category_name: 'CATEGORY NAME',
            column_action: 'ACTION',
            dont_replace: 'Don\'t replace',
            erase: 'This will erase the "%{title}" category. If there are transactions mapped to this category, and you would like to move them to an existing category, you can do so in this list (by default, all transactions will move to the "None" category). Are you sure about this?',
            title: 'Categories',
            label: 'Label'
        },

        editaccessmodal: {
            not_empty: 'Please fill the password field',
            customFields_not_empty: 'Please fill all the custom fields',
            title: 'Edit bank access',
            body: 'If your bank password changed, you need to update it in Kresus so that the bank link keeps on syncing operations from your bank account.',
            cancel: 'Cancel',
            save: 'Save'
        },

        confirmdeletemodal: {
            title: 'Confirm deletion',
            confirm: 'Confirm deletion',
            dont_delete: 'Don\'t delete'
        },

        charts: {
            amount: 'Amounts',
            balance: 'balance',
            by_category: 'by category',
            differences_all: 'differences',
            spent: 'Spent',
            received: 'Received',
            saved: 'Saved',
            title: 'Charts',

            type: 'Type',
            all_types: 'All types',
            positive: 'Income',
            negative: 'Expenses',

            period: 'Period',
            all_periods: 'All times',
            current_month: 'Current month',
            last_month: 'Last month',
            three_months: 'Last three months',
            six_months: 'Last six months',

            unselect_all_categories: 'Unselect all categories',
            select_all_categories: 'Select all categories'
        },

        general: {
            cancel: 'cancel',
            delete: 'delete',
            edit: 'edit',
            save: 'save'
        },

        menu: {
            banks: 'Banks',
            categories: 'Categories',
            charts: 'Charts',
            settings: 'Settings',
            similarities: 'Duplicates',
            sublists: 'Accounts',
            reports: 'Reports',
            budget: 'Budget',
            support: 'Support'
        },

        operations: {
            amount: 'Amount',

            column_date: 'Date',
            column_name: 'Transaction',
            column_amount: 'Amount',
            column_category: 'Category',
            column_type: 'Type',

            current_balance: 'Balance',
            as_of: 'as of',
            received: 'Received',
            spent: 'Spent',
            saved: 'Saved',

            details: 'Operation details',
            attached_file: 'Download the attached file',
            edf_details: 'See the bill in the EDF application',

            full_label: 'Full label',
            category: 'Category',

            last_sync: 'Last sync:',
            sync_now: 'Synchroniser maintenant',
            syncing: 'Fetching your latest bank transactions…',

            title: 'Transactions',
            type: 'Type',
            custom_label: 'Custom label',
            add_custom_label: 'Add a custom label',

            delete_operation_button: "Delete this operation",
            warning_delete: "Before deleting the operation by this mean, ensure it does not appear in the duplicates list, you can delete it there with the 'merge button'.",
            are_you_sure: 'Are you sure you still want to delete the operation %{label} (%{amount}) of %{date} ?'
        },

        budget: {
            title: 'Budget',
            amount: 'Amount',
            threshold: 'Threshold',
            remaining: 'Remaining',
            period: 'Period',
            threshold_error: 'The threshold must be greater or equal than 0'
        },

        search: {
            any_category: 'Any category',
            any_type: 'Any type',
            keywords: 'Keywords:',
            category: 'Category:',
            type: 'Type:',
            amount_low: 'Amount: between',
            and: 'and',
            date_low: 'Date: between',
            clear: 'Clear',
            clearAndClose: 'Clear and close',
            title: 'Search'
        },

        settings: {
            column_account_name: 'Name',
            unknown_field_type: 'unknown field type',
            website: 'Website',
            auth_type: 'Authentication type',
            birthday: 'Birthday',
            birthdate: 'Birthday',
            merchant_id: 'Merchant ID',
            birthday_placeholder: 'DDMMYYYY',
            secret: 'Secret',
            secret_placeholder: 'Enter your secret phrase here',
            favorite_code_editor: 'Favorite code editor',
            challengeanswer1: 'Challenge Answer 1',
            question1: 'Question 1',
            question2: 'Question 2',
            question3: 'Question 3',
            answer1: 'Answer 1',
            answer2: 'Answer 2',
            answer3: 'Answer 3',
            bank: 'Bank',
            login: 'Login',
            password: 'Password',
            new_bank_form_title: 'Configure a new bank access',
            duplicate_threshold: 'Duplication threshold',
            duplicate_help: 'Two transactions will appear in the Duplicates section if they both happen within this period of time of each other.',

            weboob_auto_update: 'Automatically update Weboob modules',
            weboob_auto_merge_accounts: 'Automatically merge Weboob accounts',
            weboob_enable_debug: 'Enable Weboob debug logging',
            weboob_version: "Weboob's version",

            update_weboob: 'Update weboob',
            go_update_weboob: 'Fire the update!',
            update_weboob_help: 'This will update Weboob without reinstalling it from scratch. This should be done as a first step, in case fetching transactions doesn\'t work anymore.',

            export_instance: 'Export Kresus instance',
            go_export_instance: 'Export',
            export_instance_help: 'This will export the instance to a JSON file that another Kresus instance can import. This won\'t contain the passwords of your bank accesses, which need to be reset manually when importing data from another instance.',

            browse: 'Browse',
            import_instance: 'Import Kresus instance',
            go_import_instance: 'Import',
            import_instance_help: 'This will import an existing instance, exported with the above button. It won\'t try to merge any data, so please ensure that your data is clean and delete any existing data with the DataBrowser, if needed.',
            no_file_selected: 'No file selected',

            title: 'Settings',

            tab_accounts: 'Bank accounts',
            tab_about: 'About',
            tab_backup: 'Backup / restore data',
            tab_defaults: 'Default parameters',
            tab_emails: 'Emails',
            tab_weboob: 'Weboob management',

            erase_account: 'This will erase the "%{title}" account, and all its transactions. If this is the last account bound to this bank, the bank will be erased as well. Are you sure about this?',
            erase_bank: 'This will erase the "%{name}" bank, and all its associated accounts and transactions. Are you sure about this?',
            missing_login_or_password: 'Missing login or password',
            reset: 'Reset',
            submit: 'Submit',

            delete_account_button: 'Delete account',
            delete_bank_button: 'Delete bank',
            reload_accounts_button: 'Reload accounts',
            change_password_button: 'Edit bank access',
            add_bank_button: 'Add a new bank access',
            set_default_account: 'Set as default account',
            add_operation: 'Add an operation',
            resync_account_button: 'Resync the account balance',

            resync_account: {
                title: "Resync the balance of the account: %{title}",
                submit: "Resync",
                cancel: 'Cancel',
                make_sure: "You are about to resync the balance of your account. Before that, ensure you have:",
                sync_operations: "imported all the operations from your bank website",
                manage_duplicates: "merged the duplicates",
                add_operation: "manually added the missing operation(s)",
                delete_operation: "deleted the extra operation(s)",
                are_you_sure: "Are you sure you want to proceed?"
            },

            emails: {
                invalid_limit: 'Limit value is invalid',
                add_balance: 'Add a new balance notification',
                add_transaction: 'Add a new transaction notification',
                add_report: 'Add a new email report',
                account: 'Account',
                create: 'Create',
                cancel: 'Cancel',
                details: 'Details',
                balance_title: 'Balance alerts',
                transaction_title: 'Transaction alerts',
                reports_title: 'Reports',
                send_if_balance_is: 'Notify me if balance is',
                send_if_transaction_is: 'Notify me if a transaction\'s amount is',
                send_report: 'Send me a report',
                greater_than: 'greater than',
                less_than: 'less than',
                delete_alert: 'Delete alert',
                delete_report: 'Delete report',
                delete_alert_full_text: 'This will erase this alert and you won\'t receive emails and notifications about it anymore. Are you sure you want to remove this alert?',
                delete_report_full_text: 'This will erase this report and you won\'t receive emails about it anymore. Are you sure you want to remove this alert?',
                daily: 'daily',
                weekly: 'weekly',
                monthly: 'monthly'
            },

            default_chart_type: 'Default amount type',
            default_chart_period: 'Default period',
            blog: 'Blog',
            forum_thread: 'Cozy forum thread',
            license: 'License',
            sources: 'Sources'
        },

        similarity: {
            nothing_found: 'No similar transactions found.',
            title: 'Duplicates',
            help: 'Sometimes, importing bank transactions may lead to duplicate transactions, e.g. if the bank added information to a given transaction a few days after its effective date. This screen shows similarities between suspected transactions, and allows you to manually remove duplicates. Note: Categories may be transferred upon deletion: if you have a pair of duplicates A/B, in which A has a category but B doesn\'t, and you choose to delete A, then B will inherit A\'s category.',
            date: 'Date',
            label: 'Label',
            amount: 'Amount',
            category: 'Category',
            imported_on: 'Imported on',
            merge: 'Merge',
            type: 'Type',
            find_more: 'Find more',
            find_fewer: 'Find fewer',

            threshold_1: 'Two transactions will be considered to be duplicate if the time between them is less than the time range threshold, which is set to',
            hours: 'hours',
            threshold_2: 'You can change this value by going to the Settings / Default parameters section, or by clicking the following buttons to find fewer/more duplicates'
        },

        sync: {
            no_password: 'This access\' password isn\'t set. Please set it in your bank settings and retry.',
            wrong_password: 'Your password appears to be rejected by the bank website, please go to your Kresus settings and update it.',
            first_time_wrong_password: 'The password seems to be incorrect, please type it again.',
            invalid_parameters: 'The format of one of your login or password might be incorrect: %{content}',
            expired_password: 'Your password has expired. Please change it on your bank website and update it in Kresus.',
            unknown_module: 'Unknown bank module. Please try updating Weboob.',
            unknown_error: 'Unknown error, please report: %{content}'
        },

        type: {
            none: 'None',
            unknown: 'Unknown type',
            transfer: 'Transfer',
            order: 'Order',
            check: 'Check',
            deposit: 'Deposit',
            payback: 'Payback',
            withdrawal: 'Withdrawal',
            card: 'Card',
            loan_payment: 'Loan payment',
            bankfee: 'Bank fee',
            cash_deposit: 'Cash deposit',
            card_summary: 'Card (deffered)',
            deferred_card: 'Deffered debit'
        },

        units: {
            hours: 'hours'
        },

        addoperationmodal: {
            label: 'Title',
            amount: 'Amount',
            category: 'Category',
            cancel: 'Cancel',
            submit: 'Create',
            add_operation: 'Create an operation for the account %{account}',
            type: 'Type',
            date: 'Date',
            description: 'You\'re about to create an operation for account %{account}. Make sure your account is synced before creating it. In case you want to delete an operation which was created by mistake, please use the databrowser app.'
        },

        weboobinstallreadme: {
            title: 'Please install Weboob 1.1 or later',
            content: 'In order to work as expected, Kresus has a single dependency called Weboob. To offer you the best experience, the latest stable version of Weboob has to be installed (1.1 or later, at this point). If you are hosted by CozyCloud, this should be already installed for you and this is an error; please let the CozyCloud administrators know about this by sending an email to contact@cozycloud.cc. If you are self-hosted, you\'ll need to install Weboob as described in the README file: '
        },

        datepicker: {
            monthsFull: {
                january: 'January',
                february: 'February',
                march: 'March',
                april: 'April',
                may: 'May',
                june: 'June',
                july: 'July',
                august: 'August',
                september: 'September',
                october: 'October',
                november: 'November',
                december: 'December'
            },
            monthsShort: {
                january: 'Jan',
                february: 'Feb',
                march: 'Mar',
                april: 'Apr',
                may: 'May',
                june: 'Jun',
                july: 'Jul',
                august: 'Aug',
                september: 'Sep',
                october: 'Oct',
                november: 'Nov',
                december: 'Dec'
            },
            weekdaysFull: {
                sunday: 'Sunday',
                monday: 'Monday',
                tuesday: 'Tuesday',
                wednesday: 'Wednesday',
                thursday: 'Thursday',
                friday: 'Friday',
                saturday: 'Saturday'
            },
            weekdaysShort: {
                sunday: 'Sun',
                monday: 'Mon',
                tuesday: 'Tue',
                wednesday: 'Wed',
                thursday: 'Thu',
                friday: 'Fri',
                saturday: 'Sat'
            },
            today: 'Today',
            clear: 'Clear',
            close: 'Close',
            firstDay: '0',
            format: 'dd mmmm yyyy',
            formatSubmit: 'yyyy/mm/dd',
            labelMonthNext: 'Next month',
            labelMonthPrev: 'Previous month',
            labelMonthSelect: 'Select a month',
            labelYearSelect: 'Select a year'
        },

        spinner: {
            title: "Please wait...",
            content: "Kresus is processing your demand, hang tight!"
        }
    },

    server: {
        alert: {
            operation: {
                title: 'Alert on transaction amount',
                lessThan: 'less than',
                greaterThan: 'greater than',
                content: 'Alert: the transaction "%{title}" from %{date} on the account "%{account}" has an amount of %{amount}, %{cmp} %{limit}.'
            },
            balance: {
                title: 'Alert on balance amount',
                lessThan: 'below the',
                greaterThan: 'above the',
                content: 'Alert: the balance on the account %{title} is %{cmp} alert threshold of %{limit}, with a balance of %{balance}.'
            }
        },

        email: {
            hello: 'Dear Kresus user,',
            signature: 'Yours truly, Kresus.\n\n(if you would like to unsubscribe or change the frequency to which you receive notifications, log into your Kresus and go to Settings > Emails)\n',
            seeyoulater: {
                notifications: 'See you soon for new notifications',
                report: 'See you soon for another report'
            },
            report: {
                daily: 'daily',
                weekly: 'weekly',
                monthly: 'monthly',
                subject: 'Your %{frequency} bank report',
                pre: '\nHere\'s your bank report of the %{today}.\n\nYour accounts\' balances:',
                last_sync: 'last sync on the',
                new_operations: 'New operations imported during this period:',
                no_new_operations: 'No new operations have been imported during that period.'
            },
            fetch_error: {
                subject: 'Error when fetching operations',
                UNKNOWN_WEBOOB_MODULE: 'The module is unknown',
                NO_PASSWORD: 'The password is not set',
                INVALID_PASSWORD: 'The password is invalid',
                EXPIRED_PASSWORD: 'The password expired',
                INVALID_PARAMETERS: 'The credentials are invalid',
                GENERIC_EXCEPTION: 'Unknown error',
                text: 'Kresus detected the following error when fetching operations from the bank %{bank}: \n%{error} (%{message}).\n',
                pause_poll: 'Please note no automatic polling will be retried until you fix the problem'
            }
        },
        notification: {
            new_operation: 'Kresus: %{smart_count} new transaction imported |||| Kresus: %{smart_count} new transactions imported'
        }
    }
};