import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Anggota\BookLoanController::index
 * @see app/Http/Controllers/Anggota/BookLoanController.php:26
 * @route '/peminjamanbukus'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/peminjamanbukus',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::index
 * @see app/Http/Controllers/Anggota/BookLoanController.php:26
 * @route '/peminjamanbukus'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::index
 * @see app/Http/Controllers/Anggota/BookLoanController.php:26
 * @route '/peminjamanbukus'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\BookLoanController::index
 * @see app/Http/Controllers/Anggota/BookLoanController.php:26
 * @route '/peminjamanbukus'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::create
 * @see app/Http/Controllers/Anggota/BookLoanController.php:47
 * @route '/peminjamanbukus/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/peminjamanbukus/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::create
 * @see app/Http/Controllers/Anggota/BookLoanController.php:47
 * @route '/peminjamanbukus/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::create
 * @see app/Http/Controllers/Anggota/BookLoanController.php:47
 * @route '/peminjamanbukus/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\BookLoanController::create
 * @see app/Http/Controllers/Anggota/BookLoanController.php:47
 * @route '/peminjamanbukus/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::store
 * @see app/Http/Controllers/Anggota/BookLoanController.php:55
 * @route '/peminjamanbukus'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/peminjamanbukus',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::store
 * @see app/Http/Controllers/Anggota/BookLoanController.php:55
 * @route '/peminjamanbukus'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::store
 * @see app/Http/Controllers/Anggota/BookLoanController.php:55
 * @route '/peminjamanbukus'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::show
 * @see app/Http/Controllers/Anggota/BookLoanController.php:91
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
export const show = (args: { peminjamanbuku: number | { id: number } } | [peminjamanbuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/peminjamanbukus/{peminjamanbuku}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::show
 * @see app/Http/Controllers/Anggota/BookLoanController.php:91
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
show.url = (args: { peminjamanbuku: number | { id: number } } | [peminjamanbuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { peminjamanbuku: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { peminjamanbuku: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    peminjamanbuku: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        peminjamanbuku: typeof args.peminjamanbuku === 'object'
                ? args.peminjamanbuku.id
                : args.peminjamanbuku,
                }

    return show.definition.url
            .replace('{peminjamanbuku}', parsedArgs.peminjamanbuku.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::show
 * @see app/Http/Controllers/Anggota/BookLoanController.php:91
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
show.get = (args: { peminjamanbuku: number | { id: number } } | [peminjamanbuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\BookLoanController::show
 * @see app/Http/Controllers/Anggota/BookLoanController.php:91
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
show.head = (args: { peminjamanbuku: number | { id: number } } | [peminjamanbuku: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::edit
 * @see app/Http/Controllers/Anggota/BookLoanController.php:102
 * @route '/peminjamanbukus/{peminjamanbuku}/edit'
 */
export const edit = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/peminjamanbukus/{peminjamanbuku}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::edit
 * @see app/Http/Controllers/Anggota/BookLoanController.php:102
 * @route '/peminjamanbukus/{peminjamanbuku}/edit'
 */
edit.url = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { peminjamanbuku: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    peminjamanbuku: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        peminjamanbuku: args.peminjamanbuku,
                }

    return edit.definition.url
            .replace('{peminjamanbuku}', parsedArgs.peminjamanbuku.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::edit
 * @see app/Http/Controllers/Anggota/BookLoanController.php:102
 * @route '/peminjamanbukus/{peminjamanbuku}/edit'
 */
edit.get = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Anggota\BookLoanController::edit
 * @see app/Http/Controllers/Anggota/BookLoanController.php:102
 * @route '/peminjamanbukus/{peminjamanbuku}/edit'
 */
edit.head = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::update
 * @see app/Http/Controllers/Anggota/BookLoanController.php:110
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
export const update = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/peminjamanbukus/{peminjamanbuku}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::update
 * @see app/Http/Controllers/Anggota/BookLoanController.php:110
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
update.url = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { peminjamanbuku: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    peminjamanbuku: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        peminjamanbuku: args.peminjamanbuku,
                }

    return update.definition.url
            .replace('{peminjamanbuku}', parsedArgs.peminjamanbuku.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::update
 * @see app/Http/Controllers/Anggota/BookLoanController.php:110
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
update.put = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Anggota\BookLoanController::update
 * @see app/Http/Controllers/Anggota/BookLoanController.php:110
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
update.patch = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::destroy
 * @see app/Http/Controllers/Anggota/BookLoanController.php:118
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
export const destroy = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/peminjamanbukus/{peminjamanbuku}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::destroy
 * @see app/Http/Controllers/Anggota/BookLoanController.php:118
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
destroy.url = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { peminjamanbuku: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    peminjamanbuku: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        peminjamanbuku: args.peminjamanbuku,
                }

    return destroy.definition.url
            .replace('{peminjamanbuku}', parsedArgs.peminjamanbuku.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Anggota\BookLoanController::destroy
 * @see app/Http/Controllers/Anggota/BookLoanController.php:118
 * @route '/peminjamanbukus/{peminjamanbuku}'
 */
destroy.delete = (args: { peminjamanbuku: string | number } | [peminjamanbuku: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const peminjamanbukus = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default peminjamanbukus