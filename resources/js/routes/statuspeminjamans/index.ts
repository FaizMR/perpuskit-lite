import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::index
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:19
 * @route '/statuspeminjamans'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/statuspeminjamans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::index
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:19
 * @route '/statuspeminjamans'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::index
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:19
 * @route '/statuspeminjamans'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::index
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:19
 * @route '/statuspeminjamans'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::create
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:37
 * @route '/statuspeminjamans/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/statuspeminjamans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::create
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:37
 * @route '/statuspeminjamans/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::create
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:37
 * @route '/statuspeminjamans/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::create
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:37
 * @route '/statuspeminjamans/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::store
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:45
 * @route '/statuspeminjamans'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/statuspeminjamans',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::store
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:45
 * @route '/statuspeminjamans'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::store
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:45
 * @route '/statuspeminjamans'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::show
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:53
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
export const show = (args: { statuspeminjaman: number | { id: number } } | [statuspeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/statuspeminjamans/{statuspeminjaman}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::show
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:53
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
show.url = (args: { statuspeminjaman: number | { id: number } } | [statuspeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { statuspeminjaman: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { statuspeminjaman: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    statuspeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        statuspeminjaman: typeof args.statuspeminjaman === 'object'
                ? args.statuspeminjaman.id
                : args.statuspeminjaman,
                }

    return show.definition.url
            .replace('{statuspeminjaman}', parsedArgs.statuspeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::show
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:53
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
show.get = (args: { statuspeminjaman: number | { id: number } } | [statuspeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::show
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:53
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
show.head = (args: { statuspeminjaman: number | { id: number } } | [statuspeminjaman: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::edit
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:64
 * @route '/statuspeminjamans/{statuspeminjaman}/edit'
 */
export const edit = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/statuspeminjamans/{statuspeminjaman}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::edit
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:64
 * @route '/statuspeminjamans/{statuspeminjaman}/edit'
 */
edit.url = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { statuspeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    statuspeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        statuspeminjaman: args.statuspeminjaman,
                }

    return edit.definition.url
            .replace('{statuspeminjaman}', parsedArgs.statuspeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::edit
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:64
 * @route '/statuspeminjamans/{statuspeminjaman}/edit'
 */
edit.get = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::edit
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:64
 * @route '/statuspeminjamans/{statuspeminjaman}/edit'
 */
edit.head = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::update
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:72
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
export const update = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/statuspeminjamans/{statuspeminjaman}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::update
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:72
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
update.url = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { statuspeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    statuspeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        statuspeminjaman: args.statuspeminjaman,
                }

    return update.definition.url
            .replace('{statuspeminjaman}', parsedArgs.statuspeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::update
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:72
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
update.put = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::update
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:72
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
update.patch = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::destroy
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:80
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
export const destroy = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/statuspeminjamans/{statuspeminjaman}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::destroy
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:80
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
destroy.url = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { statuspeminjaman: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    statuspeminjaman: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        statuspeminjaman: args.statuspeminjaman,
                }

    return destroy.definition.url
            .replace('{statuspeminjaman}', parsedArgs.statuspeminjaman.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Petugas\LoanStatusController::destroy
 * @see app/Http/Controllers/Petugas/LoanStatusController.php:80
 * @route '/statuspeminjamans/{statuspeminjaman}'
 */
destroy.delete = (args: { statuspeminjaman: string | number } | [statuspeminjaman: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const statuspeminjamans = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default statuspeminjamans