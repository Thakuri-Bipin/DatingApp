using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext // inheritance (colon sign shows inheritance)
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){ }

        public DbSet<Value> Values { get; set; } //tell the tables of database store in Values 

        public DbSet<User> Users { get; set; } //table column as per the properties defined in User class

        public DbSet<Photo> Photos { get; set; }
    }
}