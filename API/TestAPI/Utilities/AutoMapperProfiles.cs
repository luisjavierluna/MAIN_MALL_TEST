using AutoMapper;
using TestAPI.DTOs;
using TestAPI.Entities;

namespace TestAPI.Utilities
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<SubareaCreationDTO, Subarea>()
                .ForMember(x => x.Image, options => options.Ignore());
        }
    }
}
