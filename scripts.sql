create extension if not exists "uuid-ossp";

CREATE TYPE cart_status AS ENUM ('OPEN', 'ORDERED');

create table carts (
	id uuid not null default uuid_generate_v4() primary key,
	user_id uuid not null default uuid_generate_v4(),
	created_at date not null,
	updated_at date not null,
	status cart_status NOT NULL DEFAULT 'OPEN'
);

create table cart_items (
	product_id uuid not null,
	count integer not null
);

alter table cart_items add column cart_id uuid references carts(id);

insert into carts (id, user_id, created_at, updated_at, status) values (uuid_generate_v4(), uuid_generate_v4(), NOW(), NOW(), 'OPEN');
insert into carts (id, user_id, created_at, updated_at, status) values (uuid_generate_v4(), uuid_generate_v4(), NOW(), NOW(), 'ORDERED');
insert into carts (id, user_id, created_at, updated_at, status) values (uuid_generate_v4(), uuid_generate_v4(), NOW(), NOW(), 'ORDERED');

insert into cart_items (cart_id, product_id, count) values ('22179c2f-087b-4967-a1a9-1107db4663cd', 'cc3e3927-b20c-4d8a-9560-1cd4d999b18b', 3);
insert into cart_items (cart_id, products_id, count) values ('fa5cd2bb-3db0-4af5-9d23-5e32d2fcad19', '82819cb0-dacc-46ad-b9e5-09ab14bffc09', 7);
insert into cart_items (cart_id, product_id, count) values ('22179c2f-087b-4967-a1a9-1107db4663cd', 'd164a59b-a1cf-4f72-9dc4-933d4faa9ec5', 3);
insert into cart_items (cart_id, product_id, count) values ('8ae65b40-7a0b-4e77-9338-541ebceb1f07', 'ebbb3cd9-5844-4b3b-9094-0bce62fa1cc8', 5);
